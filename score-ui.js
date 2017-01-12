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
      alert(scoreCounter.value());
    });

    let inputValue = (this.element).querySelector(".value");
    let setBtn = (this.element).querySelector(".set");
    setBtn.type = 'button';
    setBtn.addEventListener('click', function() {
      let val = inputValue.value;
      scoreCounter.value(val);
    });

    let resetBtn = (this.element).querySelector(".reset");
    resetBtn.type = 'button';
    resetBtn.addEventListener('click', function() {
      scoreCounter.reset();
    });
  }
}
