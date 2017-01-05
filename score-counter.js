"use strict";

let upBtn = document.getElementById("up1");
let countPos = document.querySelector(".counter");
let count = 0;

upBtn.addEventListener('click', function() {
  count++;
  console.log(count);
  countPos.innerHTML = count;
});
