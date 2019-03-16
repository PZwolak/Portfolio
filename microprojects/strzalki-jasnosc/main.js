let red = 128;
let green = 128;
let blue = 128;

const h1 = document.querySelector('h1');

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

const changeDown = (e) => {
  switch (e.keyCode) {
    case 38:
      {

        red <= 255 ? red = red + 4 : red
        green <= 255 ? green = green + 4 : green
        blue <= 255 ? blue = blue + 4 : blue
        if (red > 50) {
          h1.style.color = "black";
        }
        document.body.style.backgroundColor = `rgb(${red <= 255 ? red++ : red}, ${green}, ${blue})`
        console.log(`rgb(${red}, ${green}, ${blue})`)
        break;
      }
    case 40:
      {
        red >= 0 ? red = red - 4 : red
        green >= 0 ? green = green - 4 : green
        blue >= 0 ? blue = blue - 4 : blue
        if (red < 50) {
          h1.style.color = "white";
        }
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        console.log(`rgb(${red}, ${green}, ${blue})`)
        break;
      }
  }
}


window.addEventListener('keydown',
  changeDown);