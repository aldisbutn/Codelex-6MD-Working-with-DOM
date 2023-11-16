document.addEventListener("DOMContentLoaded", function () {
  const buttonColor = document.querySelector<HTMLButtonElement>(".button--color");
  const squareColor = document.querySelector(".square--color") as HTMLElement;

  let colorChanged = false;

  buttonColor.addEventListener("click", function () {
    squareColor.style.backgroundColor = colorChanged ? "#4290f5" : "#f5e942";
    colorChanged = !colorChanged;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonTextChange = document.querySelector<HTMLButtonElement>(".button--text-change") as HTMLElement;
  const squareTextChange = document.querySelector(".square--text-change");

  buttonTextChange.addEventListener("click", function () {
    squareTextChange.textContent = 
      squareTextChange.textContent === "SUCCESS" ? "FAIL" : "SUCCESS";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonInvisible = document.querySelector<HTMLButtonElement>(".button--invisible");
  const squareInvisible = document.querySelector(".square--invisible") as HTMLElement;

  buttonInvisible.addEventListener("click", function () {
    squareInvisible.style.visibility = "hidden";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonHideUnhide = document.querySelector<HTMLButtonElement>(".button--hide-unhide");
  const squareHideUnhide = document.querySelector(".square--hide-unhide") as HTMLElement;

  buttonHideUnhide.addEventListener("click", function () {
    squareHideUnhide.style.visibility =
      squareHideUnhide.style.visibility === "hidden" ? "visible" : "hidden";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonColors = document.querySelector<HTMLButtonElement>(".button--colors");
  const squareColors = document.querySelector(".square--colors") as HTMLElement;

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
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonCount = document.querySelector<HTMLButtonElement>(".button--count");

  buttonCount.addEventListener("click", function () {
    counter();
  });
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

document.addEventListener("DOMContentLoaded", function () {
  const buttonColor = document.querySelector<HTMLButtonElement>(".button--color-everything");

  let colorsChanged = false;

  buttonColor.addEventListener("click", function () {
    const squares = document.querySelectorAll(".square--color-squares");
    
    squares.forEach((square) => {
      (square as HTMLElement).style.backgroundColor =
      (square as HTMLElement).style.backgroundColor = colorsChanged ? "#18d5e1" : "#4290f5";
    });

    document.body.style.backgroundColor =
    document.body.style.backgroundColor = colorsChanged ? "#000000" : "var(--c-natural)";
    colorsChanged = !colorsChanged;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const firstSquare = document.querySelector(".square") as HTMLElement;

  firstSquare.addEventListener("mouseover", function () {
    firstSquare.style.backgroundColor = "#c41c02";
  });

  firstSquare.addEventListener("mouseout", function () {
    firstSquare.style.backgroundColor = "#4290f5";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hoverSquareCounter = document.querySelector(".square__hover-timer") as HTMLElement;

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

document.addEventListener("DOMContentLoaded", function () {
    const sourceTextarea = document.querySelector(".text-area__source") as HTMLTextAreaElement;
    const cloneTextarea = document.querySelector(".text-area__clone") as HTMLElement;

    sourceTextarea.addEventListener("input", function () {
        cloneTextarea.textContent = sourceTextarea.value;
    });
});

