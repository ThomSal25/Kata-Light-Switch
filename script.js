const buttonLS = document.querySelector(".light-switch");
const wallLS = document.querySelector(".main-class");
buttonLS.addEventListener("click", function (event) {
  //   console.log("Button wurde geklickt!");
  //   console.log(event.target)
  //   console.log(event.currentTarget)
  //   event.stopPropagation()
  buttonLS.classList.toggle("switch-on");
  wallLS.classList.toggle("background-night");
 console.log(buttonLS.classList.value)
  if (buttonLS.classList.value === "light-switch switch-on") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});

const main = document.querySelector("main");
main.addEventListener("click", function (event) {
  //   console.log("Main wurde geklickt!");
  //   console.log(event.target)
  //   console.log(event.currentTarget)
});
