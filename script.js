    let main = document.querySelector('main')
    console.log((main.scrollHeight - main.clientHeight) / 2)
    main.scrollTo((main.scrollWidth - main.clientWidth) / 2, (main.scrollHeight - main.clientHeight) / 2);

    const slider = document.querySelector('main');
let isDown = false;
let startX;
let scrollLeft;
let startY;
let scrollTop;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
    startY = e.pageY - slider.offsetTop;
  scrollTop = slider.scrollTop;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walkX = (x - startX); //scroll-fast
  slider.scrollLeft = scrollLeft - walkX;

  const y = e.pageY - slider.offsetTop;
  const walk = (y - startY); //scroll-fast
  slider.scrollTop = scrollTop - walk;
  console.log(walk);
});