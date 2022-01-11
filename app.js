let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    const className = event.currentTarget.classList;
    if (className.contains("increase")) {
      count++;
    } else if (className.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count === 0) {
      value.style.color = "black";
    }
    if (count > 0) {
      value.style.color = "red";
    }
    if (count < 0) {
      value.style.color = "blue";
    }
    value.textContent = count;
  });
});
