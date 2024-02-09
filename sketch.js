const container = document.getElementById("container");
const gcontainer = document.getElementById("g-container");
const clearBoard = document.getElementById("clearBoard");

const createPad = (row, column) => {
  let grid = row * column;
  let color = "";

  for (i = 0; i < grid; i++) {
    let idName = "pixels" + i;
    let node = document.createElement("div");
    node.className += " sizing w-0";
    node.id = idName;

    //append to the parent container
    container.appendChild(node);

    //used mouse event to filled the pixels with black color by hovering
    document.getElementById(idName).onmouseover = function () {
      mouseOver(idName, "black");
    };
    //used mouse event right click to erased the filled pixel
    document.getElementById(idName).oncontextmenu = function () {
      mouseOver(idName, "white");
    };
  }
  //clear the sketchpad by clicking the clear board
  clearBoard.addEventListener("click", () => {
    for (i = 0; i < grid; i++) {
      let idName = "pixels" + i;
      mouseOver(idName, "white");
    }
  });
};
//put color to the div used math random to generate RGB values
function mouseOver(idName, color) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById(idName).style.background = color;
}

createPad(60, 60);
