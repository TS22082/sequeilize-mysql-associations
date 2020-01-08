$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const authorId = urlParams.get("AuthorId");
  renderPosts(authorId);

  $("#postSubmit").on("click", e => {
    e.preventDefault();
    const data = {
      title: $("#postTitleInput").val(),
      body: $("#postBodyInput").val(),
      AuthorId: authorId
    };

    $.ajax({
      type: "POST",
      url: "/api/post",
      data: data
    }).then(res => {
      console.log(res);
      renderPosts(authorId);
    });
  });

  function renderPosts(id) {
    $("#postList").empty();
    $.ajax({
      type: "GET",
      url: `api/post/${id}`
    }).then(authorPosts => {
      authorPosts.forEach(post => {
        $("#postList").append(
          `<div class="card mt-4">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-body">${post.body}</p>
            </div>
          </div>`
        );
      });
    });
  }
});
