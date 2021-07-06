class Slider {
  constructor(rangeElement, options, pageViews, cost, toggleElement) {
    this.rangeElement = rangeElement;
    this.pageViews = pageViews;
    this.cost = cost;
    this.options = options;
    this.toggleElement = toggleElement;
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

  //looks at value of slide and if toggle is checked and generates price
  generatePrice() {
    let value = parseInt(this.rangeElement.value);
    let isToggled = this.toggleElement.checked;

    if (value < 100) {
      return !isToggled ? "$8.00" : "$6.00";
    } else if (value > 100 && value < 200) {
      return !isToggled ? "$12.00" : "$9.00";
    } else if (value > 200 && value < 300) {
      return !isToggled ? "$16.00" : "$12.00";
    } else if (value > 300 && value < 400) {
      return !isToggled ? "$24.00" : "$18.00";
    } else if (value > 400 && value <= 500) {
      return !isToggled ? "$32.00" : "$24.00";
    }
  }
  //looks at value and generates views
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

//Dom Selectors
let rangeElement = document.querySelector('.range_slider_middle [type="range"]');
let rangeElement2 = document.querySelector('.range_slider_top [type="range"]');
let pageViews = document.querySelector(".views .views-num");
let cost = document.querySelector(".price .price-num");
let toggleElement = document.getElementById("toggle");

let options = {
  min: 0,
  max: 500,
};

let slider = new Slider(rangeElement, options, pageViews, cost, toggleElement);
let slider2 = new Slider(rangeElement2, options, pageViews, cost, toggleElement);

slider.updateSlider();
slider2.updateSlider();

//Event listeners
slider.rangeElement.addEventListener("input", function () {
  slider.updateSlider();
});
slider2.rangeElement.addEventListener("input", function () {
  slider2.updateSlider();
});
slider.toggleElement.addEventListener("click", function () {
  slider.updateSlider();
});
