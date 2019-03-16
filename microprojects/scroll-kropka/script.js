const square = document.createElement('div');
document.body.appendChild(square);

let size = 50;
let change = true;

square.style.height = size + "px";
square.style.width = size + "px";

window.addEventListener("scroll", function () {
    if (change == true) {
        size += 15;
        square.style.height = size + "px";
        square.style.width = size + "px";
    } else {
        size -= 15;
        square.style.height = size + "px";
        square.style.width = size + "px";
    }

    if (size >= this.window.innerWidth / 1.25) {
        change = false;
    } else if (size <= 5) {
        change = true;
    }

})