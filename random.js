const colors = [
  "#ffea08",
  "#ea5e0f",
  "#df001b",
  "#df016c",
  "#b20962",
  "#7c2b87",
  "#49328a",
  "#006ab3",
  "#02aee3",
  "#02a39b",
  "#22a12c",
  "#b9ca00",
];

const btn = document.getElementById("button_click");

btn.addEventListener("click", function () {
  const colorIndex = getRandomNumber();
  document.body.style.backgroundColor = colors[colorIndex];

  console.log(getRandomNumber());
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
