const h1 = document.querySelector('h1')

document.body.addEventListener('mousemove', function (e) {
  console.log(e.clientX, e.clientY);
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;
  h1.textContent = x + ", " + y;

  const red = x / width * 100;
  const green = y / height * 100;
  const blue = ((x + y) / (width + height)) * 100;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`

})