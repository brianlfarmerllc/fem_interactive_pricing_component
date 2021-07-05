class Slider {
  constructor(rangeElement, options, pageViews, cost) {
    this.rangeElement = rangeElement;
    this.pageViews = pageViews;
    this.cost = cost;
    this.options = options;
  }
  // method to generate the background of slider based on current value
  generateBackground() {
    if (this.rangeElement.value === this.options.min) {
      return;
    }

    let percentage = ((this.rangeElement.value - this.options.min) / (this.options.max - this.options.min)) * 100;
    return (
      "background: linear-gradient(to right, #a5f3eb, #a5f3eb " +
      percentage +
      "%, #eaeefb " +
      percentage +
      "%, #eaeefb 100%)"
    );
  }

  //looks at value and generates price
  generatePrice() {
    let value = parseInt(this.rangeElement.value);

    if (value < 100) {
      return "$8.00";
    } else if (value > 100 && value < 200) {
      return "$12.00";
    } else if (value > 200 && value < 300) {
      return "$16.00";
    } else if (value > 300 && value < 400) {
      return "$24.00";
    } else if (value > 400 && value <= 500) {
      return "$32.00";
    }
  }
  generateViews() {
    let value = parseInt(this.rangeElement.value);

    if (value < 100) {
      return "10K";
    } else if (value > 100 && value < 200) {
      return "50K";
    } else if (value > 200 && value < 300) {
      return "100K";
    } else if (value > 300 && value < 400) {
      return "500K";
    } else if (value > 400 && value <= 500) {
      return "1M";
    }
  }

  // what happns on slider change
  updateSlider() {
    this.rangeElement.style = this.generateBackground();
    this.cost.innerText = this.generatePrice();
    this.pageViews.innerText = this.generateViews();
  }
}

let rangeElement = document.querySelector('.range_slider [type="range"]');
let pageViews = document.querySelector(".views .views-num");
let cost = document.querySelector(".price .price-num");

let options = {
  min: 0,
  max: 500,
};

let slider = new Slider(rangeElement, options, pageViews, cost);

slider.updateSlider();

slider.rangeElement.addEventListener("input", function () {
  slider.updateSlider();
});
