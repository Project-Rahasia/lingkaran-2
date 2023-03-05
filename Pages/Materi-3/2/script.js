document.addEventListener("DOMContentLoaded", () => {
    let content1 = document.querySelector("#content-6");
    let nextSoal = document.querySelectorAll(".nextSoal");
    let tabContent = document.querySelectorAll(".tab-content");

    let currentTab = 1;

    content1.style.display = "block";

    function nextSlide() {
        tabContent[currentTab - 1].style.display = "none";
        currentTab++;
        let tab = document.querySelector("#content-" + currentTab);
        tab.style.display = "block";
    }

    nextSoal[0].addEventListener("click", nextSlide);
    nextSoal[1].addEventListener("click", nextSlide);
    nextSoal[2].addEventListener("click", nextSlide);
    nextSoal[3].addEventListener("click", nextSlide);
    nextSoal[4].addEventListener("click", nextSlide);

    // Soal 1
    const userAnswerSatu = document.querySelectorAll(".user-answer-1");
    const checkSatu = document.getElementById("check-1");
    const messageSatu = document.getElementById("message-1");
    const answeSatu = ["11", "3.14", "11", "2", "3.14", "121", "379.94"];

    checkSatu.addEventListener("click", () => {
        let wrong = 0;
        answeSatu.forEach((item, index) => {
            if (userAnswerSatu[index].value != item) {
                userAnswerSatu[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerSatu[index].style.border = "2px solid green";
            }
        });

        if (wrong === 7) {
            messageSatu.innerHTML = "<b>Semua jawaban salah</b>";
            messageSatu.style.color = "red";
        } else if (wrong > 0) {
            messageSatu.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageSatu.style.color = "red";
        } else {
            messageSatu.innerHTML = "<b>Jawaban benar semua</b>";
            messageSatu.style.color = "green";
            nextSoal[0].classList.remove("disabled");
        }
    });

    // Soal 2
    const userAnswerDua = document.querySelectorAll(".user-answer-2");
    const checkDua = document.getElementById("check-2");
    const messageDua = document.getElementById("message-2");
    const answeDua = ["7", "1", "22", "7", "2", "4", "7", "1", "22", "7", "4", "1", "154", "4", "38.5"];

    checkDua.addEventListener("click", () => {
        let wrong = 0;
        answeDua.forEach((item, index) => {
            if (userAnswerDua[index].value != item) {
                userAnswerDua[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerDua[index].style.border = "2px solid green";
            }
        });

        if (wrong === answeDua.length) {
            messageDua.innerHTML = "<b>Semua jawaban salah</b>";
            messageDua.style.color = "red";
        } else if (wrong > 0) {
            messageDua.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageDua.style.color = "red";
        } else {
            messageDua.innerHTML = "<b>Jawaban benar semua</b>";
            messageDua.style.color = "green";
            nextSoal[1].classList.remove("disabled");
        }
    });

    // Soal 3
    const userAnswerTiga = document.querySelectorAll(".user-answer-3");
    const checkTiga = document.getElementById("check-3");
    const messageTiga = document.getElementById("message-3");
    const answeTiga = ["20", "1", "3.14", "20", "2", "4", "1", "3.14", "400", "4", "1", "1256", "4", "314"];

    checkTiga.addEventListener("click", () => {
        let wrong = 0;
        answeTiga.forEach((item, index) => {
            if (userAnswerTiga[index].value != item) {
                userAnswerTiga[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerTiga[index].style.border = "2px solid green";
            }
        });

        if (wrong === answeTiga.length) {
            messageTiga.innerHTML = "<b>Semua jawaban salah</b>";
            messageTiga.style.color = "red";
        } else if (wrong > 0) {
            messageTiga.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageTiga.style.color = "red";
        } else {
            messageTiga.innerHTML = "<b>Jawaban benar semua</b>";
            messageTiga.style.color = "green";
            nextSoal[2].classList.remove("disabled");
        }
    });

    // Soal 4
    const userAnswerEmpat = document.querySelectorAll(".user-answer-4");
    const checkEmpat = document.getElementById("check-4");
    const messageEmpat = document.getElementById("message-4");
    const answeEmpat = ["21", "22", "21", "2", "7", "22", "21", "21", "7", "22", "3", "21", "1386"];

    checkEmpat.addEventListener("click", () => {
        let wrong = 0;
        answeEmpat.forEach((item, index) => {
            if (userAnswerEmpat[index].value != item) {
                userAnswerEmpat[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerEmpat[index].style.border = "2px solid green";
            }
        });

        if (wrong === answeEmpat.length) {
            messageEmpat.innerHTML = "<b>Semua jawaban salah</b>";
            messageEmpat.style.color = "red";
        } else if (wrong > 0) {
            messageEmpat.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageEmpat.style.color = "red";
        } else {
            messageEmpat.innerHTML = "<b>Jawaban benar semua</b>";
            messageEmpat.style.color = "green";
            nextSoal[3].classList.remove("disabled");
        }
    });

    // Soal 5
    const userAnswerLima = document.querySelectorAll(".user-answer-5");
    const checkLima = document.getElementById("check-5");
    const messageLima = document.getElementById("message-5");
    const answeLima = ["5", "3.14", "5", "2", "3.14", "5", "5", "3.14", "25", "78.5"];

    checkLima.addEventListener("click", () => {
        let wrong = 0;
        answeLima.forEach((item, index) => {
            if (userAnswerLima[index].value != item) {
                userAnswerLima[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerLima[index].style.border = "2px solid green";
            }
        });

        if (wrong === answeLima.length) {
            messageLima.innerHTML = "<b>Semua jawaban salah</b>";
            messageLima.style.color = "red";
        } else if (wrong > 0) {
            messageLima.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageLima.style.color = "red";
        } else {
            messageLima.innerHTML = "<b>Jawaban benar semua</b>";
            messageLima.style.color = "green";
            nextSoal[4].classList.remove("disabled");
        }
    });

    // Soal 6
    const userAnswerEnam = document.querySelectorAll(".user-answer-6");
    const checkEnam = document.getElementById("check-6");
    const messageEnam = document.getElementById("message-6");
    const answeEnam = ["1256", "3.14", "1256", "3.14", "1256", "3.14", "400", "400", "20"];

    checkEnam.addEventListener("click", () => {
        let wrong = 0;
        answeEnam.forEach((item, index) => {
            if (userAnswerEnam[index].value != item) {
                userAnswerEnam[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerEnam[index].style.border = "2px solid green";
            }
        });

        if (wrong === answeEnam.length) {
            messageEnam.innerHTML = "<b>Semua jawaban salah</b>";
            messageEnam.style.color = "red";
        } else if (wrong > 0) {
            messageEnam.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageEnam.style.color = "red";
        } else {
            messageEnam.innerHTML = "<b>Jawaban benar semua</b>";
            messageEnam.style.color = "green";
        }
    });
});