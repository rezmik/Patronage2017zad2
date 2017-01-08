"use strict";

class ScoreCounter {
  constructor(element, digits, count) {
    this.element = element;
    this.digits = digits;
    this.count = count;
  }

  up() {
    let number = this.maxValue();

    if( this.count != number) {
      return this.setCounter(++this.count);
    } else {
      return this.setCounter(this.count);
    }
  }

  down() {
    if(this.count > 0) {
      return this.setCounter(--this.count);
    } else {
      this.count=0;
      return this.setCounter(this.count);
    }
  }

  value0() {
    return this.count;
  }

  value1(number) {
    if(number == '') {
      alert("Wpisz wartosc liczbowa do pola.");
      return this.setCounter(this.count);
    } else {
      if(number > this.maxValue()) {
        alert("Podana wartosc jest zbyt duza. Maksymalna wartosc w tym liczniku to " + this.maxValue());
        return this.setCounter(this.count);
      } else {
        this.count = number;
        return this.setCounter(this.count);
      }
    }
  }

  reset() {
    this.count = 0;
    return this.setCounter(this.count);
  }

  setCounter(coun) {
    let i = 0;
    let text = '';
    let number = coun;
    for(; number >= 1 ; i++) {
      number /= 10;
    }
    for(let j = 0; j < this.digits-i; j++) {
      text += '0';
    }
    if(coun != 0) {
      text += coun;
    }
    (this.element).innerHTML = text;
  }

  maxValue() {
    let number = 1;

    for(let i = 0; i < this.digits ; i++) {
      number *= 10;
    }
    number -= 1;
    return number;
  }
}

class ScoreUI {
  constructor(element, digits, count) {
    this.element = element;
    this.digits = digits;
    this.count = count;

    var scoreCounter = new ScoreCounter((this.element).querySelector(".counter"), this.digits, this.count);
    scoreCounter.setCounter(this.count);

    let upBtn = (this.element).querySelector(".up");
    upBtn.type = 'button';
    upBtn.addEventListener('click', function() {
      scoreCounter.up()
    });

    let downBtn = (this.element).querySelector(".down");
    downBtn.type = 'button';
    downBtn.addEventListener('click', function() {
      scoreCounter.down();
    });

    let getBtn = (this.element).querySelector(".get");
    getBtn.type = 'button';
    getBtn.addEventListener('click', function() {
      alert(scoreCounter.value0());
    });

    let inputValue = (this.element).querySelector(".value");
    let setBtn = (this.element).querySelector(".set");
    setBtn.type = 'button';
    setBtn.addEventListener('click', function() {
      let val = inputValue.value;
      scoreCounter.value1(val);
    });

    let resetBtn = (this.element).querySelector(".reset");
    resetBtn.type = 'button';
    resetBtn.addEventListener('click', function() {
      scoreCounter.reset();
    });
  }
}

var score1 = new ScoreUI(document.getElementById("score-1"), 1, 0);
var score2 = new ScoreUI(document.getElementById("score-2"), 2, 10);
var score3 = new ScoreUI(document.getElementById("score-3"), 4, 100);
