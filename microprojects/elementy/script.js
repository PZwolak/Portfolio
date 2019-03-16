const btn = document.querySelector("button"); //pobranie przycisku

let number = 1;

function addDiv() {
    const div = document.createElement('div'); // stworzenie elementu
    div.textContent = number; //dodaje do zawartości diva liczbę
    if (number % 3 == 0) {
        div.classList.add('circle')
    } // warunek dodający klasę koła
    document.body.appendChild(div); // dodaje nasz stworzony element do html
    number++;
    console.log(div)
}



btn.addEventListener("click", addDiv)