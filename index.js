const btn = document.getElementById("btn");
const shapes = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
];
const colors = ["#01d2fd", "#ffc700", "#fe9f12", "#06d0c7"];
const boxes = document.querySelectorAll(".container div");
let generatePattern = () => {
  boxes.forEach((box) => {