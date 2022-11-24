/* ------------------landingPage------------------------- */
const infoBtns = document.querySelectorAll(".btn");
let artistInfo = document.querySelectorAll(".artists");
let textInfoThree = document.querySelector(".text-info");
let button1 = document.querySelector(".btn-1");
let button2 = document.querySelector(".btn-2");
let button3 = document.querySelector(".btn-3");
let button4 = document.querySelector(".btn-4");
let button5 = document.querySelector(".btn-5");
let button6 = document.querySelector(".btn-6");

button1.addEventListener("click", () => {
 let textInfoOne = document.querySelector(".text-info-1");
  showInfo(button1 , textInfoOne);
});

button2.addEventListener("click", () => {
  let textInfoTwo = document.querySelector(".text-info-2");
  showInfo(button2, textInfoTwo);
});

button3.addEventListener("click", () => {
    let textInfoThree = document.querySelector(".text-info-3");
    showInfo(button3, textInfoThree);
  });

    button4.addEventListener("click", () => {
        let textInfoFour = document.querySelector(".text-info-4");
        showInfo(button4, textInfoFour);
        });

    button5.addEventListener("click", () => {
        let textInfoFive = document.querySelector(".text-info-5");
        showInfo(button5, textInfoFive);
        });

    button6.addEventListener("click", () => {
        let textInfoSix = document.querySelector(".text-info-6");
        showInfo(button6, textInfoSix);
        });

   

function showInfo(currentBtn, textInfo) {
  let text = currentBtn.nextElementSibling;
  if (window.getComputedStyle(text).display == "none") {
    text.style.display = "block";
    textInfo.style.display = "none";
    currentBtn.innerHTML = "Dölj info";
  } else {
    text.style.display = "none";
    textInfo.style.display = "block";
    currentBtn.innerHTML = "Om Konstnär";
  }
}






