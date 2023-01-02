document.addEventListener("DOMContentLoaded", () => {
  // Contoh 1
  const btnSatuStep1 = document.getElementById("btnSatu_step-1");
  const showSatuStep1 = document.getElementById("showSatu_step-1");
  showSatuStep1.style.display = "none";
  btnSatuStep1.addEventListener("click", () => {
    showSatuStep1.style.display = "block";
  });

  const btnSatuStep2 = document.getElementById("btnSatu_step-2");
  const showSatuStep2 = document.getElementById("showSatu_step-2");
  showSatuStep2.style.display = "none";
  btnSatuStep2.addEventListener("click", () => {
    showSatuStep2.style.display = "block";
  });

  // Contoh 2
  const btnDuaStep1 = document.getElementById("btnDua_step-1");
  const showDuaStep1 = document.getElementById("showDua_step-1");
  showDuaStep1.style.display = "none";
  btnDuaStep1.addEventListener("click", () => {
    showDuaStep1.style.display = "block";
  });

  const btnDuaStep2 = document.getElementById("btnDua_step-2");
  const showDuaStep2 = document.getElementById("showDua_step-2");
  showDuaStep2.style.display = "none";
  btnDuaStep2.addEventListener("click", () => {
    showDuaStep2.style.display = "block";
  });

  // Contoh 3
  const btnTigaStep1 = document.getElementById("btnTiga_step-1");
  const showTigaStep1 = document.getElementById("showTiga_step-1");
  showTigaStep1.style.display = "none";
  btnTigaStep1.addEventListener("click", () => {
    showTigaStep1.style.display = "block";
  });

  const btnTigaStep2 = document.getElementById("btnTiga_step-2");
  const showTigaStep2 = document.getElementById("showTiga_step-2");
  showTigaStep2.style.display = "none";
  btnTigaStep2.addEventListener("click", () => {
    showTigaStep2.style.display = "block";
  });

  // Contoh 4
  const btnEmpatStep1 = document.getElementById("btnEmpat_step-1");
  const showEmpatStep1 = document.getElementById("showEmpat_step-1");
  showEmpatStep1.style.display = "none";
  btnEmpatStep1.addEventListener("click", () => {
    showEmpatStep1.style.display = "block";
  });

  const btnEmpatStep2 = document.getElementById("btnEmpat_step-2");
  const showEmpatStep2 = document.getElementById("showEmpat_step-2");
  showEmpatStep2.style.display = "none";
  btnEmpatStep2.addEventListener("click", () => {
    showEmpatStep2.style.display = "block";
  });

  // Latihan
  const keliling = document.querySelectorAll(".keliling");
  const perbandingan = document.querySelectorAll(".perbandingan");
  const cekAnswer = document.getElementById("check-answer");

  const diameter = [4, 6, 8, 10];

  cekAnswer.addEventListener("click", () => {
    diameter.forEach((value, index) => {
      const hasil = keliling[index].value / value;

      if (perbandingan[index].value != hasil) {
        perbandingan[index].style.border = "2px solid red";
      } else {
        perbandingan[index].style.border = "2px solid green";
      }
    });
  });
});
