//-----------------------------Task 1 (i)------------------------

let cheatCodeKeys = {
  72: "h",
  69: "e",
  76: "l",
  79: "o",
};

let cheatCodeSequence = ["h", "e", "l", "l", "o"];
let userKeyPosition = 0;

document.addEventListener("keydown", function (e) {
  let key = cheatCodeKeys[e.keyCode];
  let expectedKey = cheatCodeSequence[userKeyPosition];

  // matching keys sequence and increment userKeyPositon
  if (key === expectedKey) {
    userKeyPosition++;
    if (userKeyPosition === cheatCodeSequence.length) {
      cheatActivated();
      userKeyPosition = 0;
    }
  } else {
    userKeyPosition = 0;
  }
});

function cheatActivated() {
  alert("Game Code Activated.");
}

//-----------------------------Task 1 (ii)------------------------

document.addEventListener("dblclick", function (e) {
  document.getElementById("x-coordinate").textContent = e.x;
  document.getElementById("y-coordinate").textContent = e.y;
});

//-----------------------------Task 1 (iii)------------------------

document.addEventListener("touchend", function () {
  console.log("You touch the webpage");
});

//-----------------------------Task 1 (iv)------------------------

window.onfocus = function (e) {
  let interval = setInterval(function () {
    alert("Hurry Up");
    setInterval(interval);
  }, 15000);
};

//-----------------------------Task 1 (v)------------------------
let idle = 0;
document.addEventListener("mousemove", function (e) {
  idle = 1;
});

document.addEventListener("click", function (e) {
  idle = 1;
});

document.addEventListener("keypress", function (e) {
  idle = 1;
});

let idling = setInterval(function () {
  if (idle === 0) {
    alert("Hurry up");
  } else {
    idle = 0;
  }
}, 15000);
