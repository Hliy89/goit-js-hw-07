const controlsBtn = document.getElementById('controls');
const inputNum = controlsBtn.querySelector('input');
const createBtn = controlsBtn.querySelector('[data-action=render]');
const clearBtn = controlsBtn.querySelector('[data-action=destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener("click", function () {
    onCreateBoxes(inputNum.value);
});

clearBtn.addEventListener("click", onClearButton);

function onCreateBoxes(amount) {
    for (let i = 1; i <= amount; i += 1) {
        const boxesEl = document.createElement("div");
        boxesEl.textContent = "777"
        boxesEl.style.width = `${20 + i * 10}px`;
        boxesEl.style.height = `${20 + i * 10}px`;
        boxesEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        function getRandom(min, max) {
            return Math.ceil(Math.random() * (max - min) + min);
        }
        boxes.append(boxesEl);
    }
}

function onClearButton() {
    boxes.innerHTML = "";
}

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// -----Размеры самого первого div - 30px на 30px
// -----Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

