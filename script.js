    let main = document.querySelector('main')
    console.log((main.scrollHeight - main.clientHeight) / 2)
    main.scrollTo((main.scrollWidth - main.clientWidth) / 2, (main.scrollHeight - main.clientHeight) / 2);

const slider = document.querySelector('main');

let up = false;
let down = false;
let right = false;
let left = false;

  let aspectRatio = slider.clientWidth / slider.clientHeight

slider.addEventListener('mousemove', (e) => {
  left = false;
  right = false;
  up = false;
  down = false;

  if ((e.pageX / slider.clientWidth) < (0.2 * aspectRatio)) {
    left = true;
  } else if ((e.pageX / slider.clientWidth) > (0.8 / aspectRatio)) {
    right = true;
  }

  if ((e.pageY / slider.clientHeight) < (0.2 * aspectRatio)) {
    up = true;
  } else if ((e.pageY / slider.clientHeight) > (0.8 / aspectRatio)) {
    down = true;
  }
})

function panning() {
  setInterval(() => {
    if (left) {
      slider.scrollLeft -= 2;
    } else if (right) {
      slider.scrollLeft += 2;
    }

    if (up) {
      slider.scrollTop -= 2;
    } else if (down) {
      slider.scrollTop += 2;
    }
  }, 10);
}


