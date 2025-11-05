//login-signUp button

document.getElementById("loginBtn").addEventListener("click", function() {
  window.location.href = "login.html";
});

//search button
document.querySelector(".search-btn").addEventListener("click", function () {
  const query = document.querySelector(".search-input").value;
  if (query) {
    window.location.href = search.html?q=${encodeURIComponent(query)};
  }
});