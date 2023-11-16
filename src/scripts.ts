document.addEventListener("DOMContentLoaded", function () {

  
  // Button1
  const buttonColor = document.querySelector<HTMLButtonElement>(".button--color");
  const squareColor = document.querySelector<HTMLDivElement>(".square--color");

  let colorChanged = false;

  buttonColor.addEventListener("click", function () {
    squareColor.style.backgroundColor = colorChanged ? "#4290f5" : "#f5e942";
    colorChanged = !colorChanged;
  });


  // Button 2
  const buttonTextChange = document.querySelector<HTMLButtonElement>(".button--text-change");
  const squareTextChange = document.querySelector<HTMLDivElement>(".square--text-change");

  buttonTextChange.addEventListener("click", function () {
    squareTextChange.textContent = 
      squareTextChange.textContent === "SUCCESS" ? "FAIL" : "SUCCESS";
  });


  // Button 3
  const buttonInvisible = document.querySelector<HTMLButtonElement>(".button--invisible");
  const squareInvisible = document.querySelector<HTMLDivElement>(".square--invisible");

  buttonInvisible.addEventListener("click", function () {
    squareInvisible.style.visibility = "hidden";
  });


  // Button 4
  const buttonHideUnhide = document.querySelector<HTMLButtonElement>(".button--hide-unhide");
  const squareHideUnhide = document.querySelector<HTMLDivElement>(".square--hide-unhide");

  buttonHideUnhide.addEventListener("click", function () {
    squareHideUnhide.style.visibility =
      squareHideUnhide.style.visibility === "hidden" ? "visible" : "hidden";
  });


  // Button 5
  const buttonColors = document.querySelector<HTMLButtonElement>(".button--colors");
  const squareColors = document.querySelector<HTMLDivElement>(".square--colors");

  buttonColors.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * (5 - 0) + 0);

    switch (randomNumber) {
      case 0:
        squareColors.style.backgroundColor = "#eb3434";
        break;
      case 1:
        squareColors.style.backgroundColor = "#ebe134";
        break;
      case 2:
        squareColors.style.backgroundColor = "#64eb34";
        break;
      case 3:
        squareColors.style.backgroundColor = "#34ebcc";
        break;
      case 4:
        squareColors.style.backgroundColor = "#eb34dc";
        break;
    }
  });


  // Button 6
  const buttonCount = document.querySelector<HTMLButtonElement>(".button--count");

  buttonCount.addEventListener("click", function () {
    counter();
  });

  const counter = () => {
    let count = 0;
    const counterElement = document.querySelector(".square--count");
  
    const intervalId = setInterval(function () {
      counterElement.textContent = count.toString();
      count += 1;
  
      if (count === 11) {
        clearInterval(intervalId);
      }
    }, 3000);
  };


  // Button 7
  const buttonColorEverything = document.querySelector<HTMLButtonElement>(".button--color-everything");

  let colorsChanged = false;

  buttonColorEverything.addEventListener("click", function () {
    const squares = document.querySelectorAll(".square--color-squares");
    
    squares.forEach((square) => {
      (square as HTMLDivElement).style.backgroundColor =
      (square as HTMLDivElement).style.backgroundColor = colorsChanged ? "#18d5e1" : "#4290f5";
    });

    document.body.style.backgroundColor =
    document.body.style.backgroundColor = colorsChanged ? "#000000" : "var(--c-natural)";
    colorsChanged = !colorsChanged;
  });

  
  // Square 1 hover color change
  const firstSquare = document.querySelector<HTMLButtonElement>(".square");

  firstSquare.addEventListener("mouseover", function () {
    firstSquare.style.backgroundColor = "#c41c02";
  });

  firstSquare.addEventListener("mouseout", function () {
    firstSquare.style.backgroundColor = "#4290f5";
  });


  // Square 5 hover counter
  const hoverSquareCounter = document.querySelector<HTMLButtonElement>(".square__hover-timer");

  let intervalId: string | number | NodeJS.Timer;

  hoverSquareCounter.addEventListener("mouseover", function () {
    if (!intervalId) {
      intervalId = setInterval(function () {
        hoverCounter(hoverSquareCounter, intervalId);
      }, 1000);
    }
  });

  hoverSquareCounter.addEventListener("mouseout", function () {
    clearInterval(intervalId);
    intervalId = null;
    hoverSquareCounter.textContent = "0";
  });

  const hoverCounter = (
    counterElement: HTMLElement,
    intervalId: string | number | NodeJS.Timer) => {
    const count = parseInt(counterElement.textContent || "0");
    counterElement.textContent = (count + 1).toString();
  
    if (count === 9) {
      clearInterval(intervalId);
    }
  };


  // Text area duplicator
  const sourceTextarea = document.querySelector<HTMLTextAreaElement>(".text-area__source");
  const cloneTextarea = document.querySelector<HTMLButtonElement>(".text-area__clone");

  sourceTextarea.addEventListener("input", function () {
      cloneTextarea.textContent = sourceTextarea.value;
  });
});