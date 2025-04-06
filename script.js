
function completeTask(taskId) {
  let current = parseInt(localStorage.getItem("balance")) || 0;
  current += 10; // setiap tugas bernilai 10 token
  localStorage.setItem("balance", current);
  document.getElementById("balance").textContent = current;
  alert("Tugas " + taskId + " selesai! Kamu mendapatkan 10 SURF.");
}

window.onload = function () {
  let current = parseInt(localStorage.getItem("balance")) || 0;
  document.getElementById("balance").textContent = current;
};
