const btnNext = document.getElementById("nextSlide");

const btnPrev = document.getElementById("prevSlide");

const slider = document.querySelector(".slider");

const { width: sliderWidth } = window.getComputedStyle(slider);

function controlSlide({ target: { id } }) {
  switch (id) {
    case "nextSlide":
      return slider.scrollLeft =+ parseInt(sliderWidth);

    case "prevSlide":
      break;

    default:
      break;
  }
}

btnNext.addEventListener("click", controlSlide);
btnPrev.addEventListener("click", controlSlide);
