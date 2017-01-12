var score1 = new ScoreUI(document.getElementById("score-1"), 1, 0);
var score2 = new ScoreUI(document.getElementById("score-2"), 2, 10);
var score3 = new ScoreUI(document.getElementById("score-3"), 4, 100);

let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener('click', function() {
  let newDiv = document.createElement("div");
  newDiv.className = "divView";

  let body = document.getElementsByTagName("body")[0];
  body.insertBefore(newDiv,addBtn);

  let lastDiv = document.querySelectorAll(".divView");
  let lengthDiv = lastDiv.length;
  lastDiv = lastDiv[lastDiv.length-1];

  lastDiv.innerHTML = '<h1 class="newHeader">Score '+lengthDiv+': <span class="counter"></span>'+
                      '<button class="deleteBtn">Usun licznik</button></h1>'+
                      '<form>'+
                        '<button class="up">Up</button>'+
                        '<button class="down">Down</button>'+
                        '<button class="get">Get</button>'+
                        '<input class="value" type="number">'+
                        '<button class="set">Set</button>'+
                        '<button class="reset">Reset</button>'+
                      '</form>';

  let delBtn = lastDiv.querySelector(".deleteBtn");

  var score = new ScoreUI(lastDiv,2,0);

  delBtn.addEventListener('click', function() {
    Node.prototype.empty = function() {
      while(this.firstChild) {
        this.removeChild(this.firstChild);
      }
    }
    lastDiv.empty();
    body.removeChild(lastDiv);
    delete score;
    scoreNumber();
  });
});

var scoreNumber = function() {
  let allDiv = document.querySelectorAll(".newHeader");

  for (let i = 0; i<allDiv.length; i++) {
    let scoreNr = allDiv[i].childNodes[0];
    let scoreNrText = document.createTextNode("Score "+(i+4)+": ");
    allDiv[i].insertBefore(scoreNrText, scoreNr);
    allDiv[i].removeChild(scoreNr);
  }
}
