// Fill welcome message
document.addEventListener("DOMContentLoaded", function () {
    const name = prompt("Masukkan nama Anda:");
    if (name) {
      document.getElementById("welcome-message").textContent = `Hi ${name}, Welcome To Website`;
    }
  
    const form = document.getElementById("messageForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const dob = document.getElementById("dob").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const message = document.getElementById("messageText").value.trim();
  
      if (!name || !dob || !gender || !message) {
        alert("Semua kolom harus diisi!");
        return;
      }
  
      const outputBox = document.getElementById("outputBox");
      outputBox.innerHTML = `
        <p><strong>Current time :</strong> ${new Date().toString()}</p>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Tanggal Lahir :</strong> ${dob}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender.value}</p>
        <p><strong>Pesan :</strong> ${message}</p>
      `;
    });
  });  