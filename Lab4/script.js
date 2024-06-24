$(document).ready(function () {
  // jQuery AJAX Example
  $("#jqueryBtn").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      type: "GET",
      success: function (data) {
        $("#jqueryResult").html(`
          <h5>${data.title}</h5>
          <p>${data.body}</p>
        `);
      },
      error: function (error) {
        $("#jqueryResult").html("<p>Error fetching data</p>");
      },
    });
  });

  // Fetch API Example
  document.getElementById("fetchBtn").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("fetchResult").innerHTML = `
          <h5>${data.title}</h5>
          <p>${data.body}</p>
        `;
      })
      .catch((error) => {
        document.getElementById("fetchResult").innerHTML =
          "<p>Error fetching data</p>";
      });
  });
});
