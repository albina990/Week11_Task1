let button = document.querySelector("button");
let total = document.querySelector(".total__price");
let prices = Array.from(document.querySelectorAll(".card__price"));
let pricesInt = prices.map((item) => parseInt(item.textContent));
let totalPrice = pricesInt.reduce((a, b) => a + b);
total.textContent = totalPrice + " руб.";

function discount() {
    totalPrice = totalPrice * 0.8
    total.textContent = totalPrice + " руб."
    prices.forEach(
        (item) => (item.innerHTML = parseInt(item.innerHTML) * 0.8 + " руб.")
    )
    button.removeEventListener("click", discount)
}

button.addEventListener("click", discount);
