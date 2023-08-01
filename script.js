document.getElementById("login").addEventListener("click", function () {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == "" && pass == "") {
    document.getElementById("login-area").style.display = "none";

    document.getElementById("transection-area").style.display = "block";
  } else {
    alert("Login failed");
  }
});

document.getElementById("depositBtn").addEventListener("click", function () {
  const depositAmount = parseFloat(
    document.getElementById("depositAmount").value
  );
  const deposit = parseFloat(document.getElementById("deposit").innerText);
  const totalDeposit = depositAmount + deposit;
  document.getElementById("deposit").innerText = totalDeposit;
  document.getElementById("balance").innerHTML = totalDeposit;

  document.getElementById("depositAmount").value = "";
});

document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawAmount = parseFloat(
    document.getElementById("withdrawAmount").value
  );
  const withdraw = parseFloat(document.getElementById("withdraw").innerText);
  const totalWithdraw = withdrawAmount + withdraw;
  const balance = parseFloat(document.getElementById("balance").innerText);
  document.getElementById("balance").innerText = balance - totalWithdraw;
  document.getElementById("withdraw").innerText = totalWithdraw;
  document.getElementById("withdrawAmount").value = "";
});
