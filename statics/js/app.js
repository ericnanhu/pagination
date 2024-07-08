document.addEventListener("DOMContentLoaded", function () {
  const loadMoreButton = document.getElementById("loadMore");
  const postList = document.getElementById("postList");

  let cursor = loadMoreButton.getAttribute("data-cursor");

  loadMoreButton.addEventListener("click", function () {
    fetch("/load", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cursor: cursor,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          data.posts.forEach((post) => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = "#";
            a.textContent = post.title;

            li.appendChild(a);
            postList.appendChild(li);
          });
          cursor = data.cursor;
        } else {
          loadMoreButton.textContent = "No more posts";
          loadMoreButton.disabled = true;
        }
      })
      .catch((error) => {
        console.error("Error loading posts:", error);
      });
  });
});
