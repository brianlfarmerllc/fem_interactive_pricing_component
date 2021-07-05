class Slider {
  constructor(rangeElement, options) {
    this.rangeElement = rangeElement;
    this.options = options;

    // Attach a listener to "change" event
    this.rangeElement.addEventListener("input", this.updateSlider.bind(this));
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute("min", options.min);
    this.rangeElement.setAttribute("max", options.max);
    this.rangeElement.value = options.cur;

    this.updateSlider();
  }

  generateBackground(rangeElement) {
    if (this.rangeElement.value === this.options.min) {
      return;
    }

    let percentage =
      ((this.rangeElement.value - this.options.min) / (this.options.max - this.options.min)) * 100;
    return (
      "background: linear-gradient(to right, #a5f3eb, #a5f3eb " +
      percentage +
      "%, #eaeefb " +
      percentage +
      "%, #eaeefb 100%)"
    );
  }

  updateSlider(newValue) {
    this.rangeElement.style = this.generateBackground(this.rangeElement.value);
  }
}

let rangeElement = document.querySelector('.range_slider [type="range"]');

let options = {
  min: 0,
  max: 500,
  cur: 250,
};

if (rangeElement) {
  let slider = new Slider(rangeElement, options);

  slider.init();
}
