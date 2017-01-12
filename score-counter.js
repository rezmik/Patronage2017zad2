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
      return this.addAnimationClass(this.setCounter(++this.count));
    } else {
      return this.setCounter(this.count);
    }
  }

  down() {
    if(this.count > 0) {
      return this.addAnimationClass(this.setCounter(--this.count));
    } else {
      this.count=0;
      return this.setCounter(this.count);
    }
  }

  value(number) {
    if(number == undefined) {
      return this.count;
    } else {
      if(number == '') {
        alert("Wpisz wartosc liczbowa do pola.");
        return this.setCounter(this.count);
      } else {
        if(number > this.maxValue()) {
          alert("Podana wartosc jest zbyt duza. Maksymalna wartosc w tym liczniku to " + this.maxValue());
          return this.setCounter(this.count);
        } else {
          this.count = number;
          return this.addAnimationClass(this.setCounter(this.count));
        }
      }
    }
  }

  reset() {
    this.count = 0;
    return this.addAnimationClass(this.setCounter(this.count));
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
    text += '<span>';
    if(coun != 0) {
      text += coun;
    }
    text += '</span>';
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

  addAnimationClass(func) {
    ((this.element).lastChild).className = "animacja";
    func;
    setTimeout(function() {
        let sth = document.querySelector(".animacja");
        sth.classList.remove("animacja");
	  }, 500);
  }
}
