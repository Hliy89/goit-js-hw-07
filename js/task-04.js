
let counterValue = 0;
const value = document.getElementById('value');
const counter = document.getElementById('counter');
const decrementBtn = counter.querySelector("[data-action=decrement]");
const incrementBtn = counter.querySelector("[data-action=increment]");

const decrement = function () {
    counterValue -= 1;
    value.textContent = counterValue;
}
decrementBtn.addEventListener("click", decrement)

const increment = function () {
    counterValue += 1;
    value.textContent = counterValue;
}
incrementBtn.addEventListener("click", increment)

// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса