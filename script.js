let tg = window.Telegram.WebApp;

window.onload = function () {
  tg.expand();
  document.getElementById("username").innerText = "Halo, " + tg.initDataUnsafe.user.first_name;
};

function showTasks() {
  alert("Tugas:\n1. Join Channel\n2. Retweet\n3. Invite Teman");
}

function checkBalance() {
  alert("Saldo kamu: 50 TRWD");
}
