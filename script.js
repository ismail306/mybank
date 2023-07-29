document.getElementById("login").addEventListener("click", function () {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == "Admin" && pass == "pass") {
    document.getElementById("login-area").style.display = "none";

    document.getElementById("transection-area").style.display = "block";
    alert("Login successful");
  } else {
    alert("Login failed");
  }
});
