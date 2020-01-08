$(document).ready(function() {
  renderAuthors();
});

$("#addAuthorSubmit").on("click", function() {
  const input = $("#authorInput").val();

  $.ajax({
    type: "POST",
    url: "api/author",
    data: {
      name: input
    }
  }).then(res => {
    console.log(res);
    renderAuthors();
  });
});

renderAuthors = () => {
  $.ajax({
    type: "GET",
    url: "/api/author"
  }).then(authors => {
    console.log(authors);
    $("#authorList").empty();
    authors.forEach(author => {
      $("#authorList").prepend(
        `<div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">${author.name}</h5>
            <div class="text-right">
              <button data-id="${author.id}" id="findAuthor" class="btn btn-outline-primary">View Info</button>
            </div>
          </div>
        </div>`
      );
    });
  });
};

$(document).on("click", "#findAuthor", function() {
  const id = $(this).attr("data-id");
  window.location.href = `/showcase?AuthorId=${id}`;
});

// const input = $("#authorInput").val();
// console.log(input);
// window.location.href = `/showcase?authorName=${input}`;
