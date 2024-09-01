let res = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let turn = true;

const winArr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
res.addEventListener("click", () => {
  for (let ele of boxes) {
    ele.innerText = "";
    ele.disabled = false;
  }
});

for (let box of boxes) {
  box.addEventListener("click", () => {
    // console.log("box is clicked");
    if (turn) {
      turn = false;
      box.innerText = "O";
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    if (checkWinner()) {
      for (let ele of boxes) {
        ele.innerText = "";
        ele.disabled = false;
      }
    }
    if(draw()){
      for (let ele of boxes) {
        ele.innerText = "";
        ele.disabled = false;
      }
    }
  });
}

function checkWinner() {
  winArr.forEach((element) => {
    let pos1 = boxes[element[0]].innerText;
    let pos2 = boxes[element[1]].innerText;
    let pos3 = boxes[element[2]].innerText;

    if (pos1 == pos2 && pos2 == pos3 && pos3 == pos1) {
      if (pos1 != "" && pos2 != "" && pos3 != "") {
        // alert("You are Winner");
        let vis = document.querySelector(".won");
        vis.style.visibility = "visible";
        let reset = document.querySelector(".reset");
        reset.style.visibility = "hidden";

        let won = document.querySelector(".new");
        let winner = document.querySelector("h2");
        winner.innerText = winner.innerText + pos1;

        won.addEventListener("click", () => {
          for (let ele of boxes) {
            ele.innerText = "";
            vis.style.visibility = "collapse";
            ele.disabled = false;
            reset.style.visibility = "visible";
            let tt = pos1;
            winner.innerHTML = "Congratulations! <br><br>Winner is &nbsp; ";
          }
        });
      }
    }
  });
}
function draw(){
  let count=0;
  for(let ele of boxes){
    if(ele.disabled==1)count++;
  }
  if(count==9)
    return true;
  else return false;
}
