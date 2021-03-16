const controlsBtn = document.getElementById('controls');
const inputNum = controlsBtn.querySelector('input');
const createBtn = controlsBtn.querySelector('[data-action=render]');
const clearBtn = controlsBtn.querySelector('[data-action=destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener("click", function () {
    onCreateBoxes(inputNum.value);
});

clearBtn.addEventListener("click", onClearButton);

// ---------СПОСОБ 1-й----------

function onCreateBoxes(amount) {
    let firstDivWidth = 30;
    let secondDivHeight = 30;
    let arr = [];
    for (let i = 1; i <= amount; i += 1){
        const boxesEl = document.createElement("div");
        boxesEl.style.width = `${firstDivWidth}px`;
        boxesEl.style.height = `${secondDivHeight}px`;
        firstDivWidth += 10;
        secondDivHeight += 10;
        boxesEl.style.backgroundColor = `rgba(${getRandom()}, ${getRandom()}, ${getRandom()})`;
        arr.push(boxesEl);
    }
    boxes.append(...arr);
}

function onClearButton() {
    boxes.innerHTML = "";
}

function getRandom() {
            return Math.floor(Math.random() * 256);
}

// ---------СПОСОБ 2-й----------
        
// function onCreateBoxes(amount) {
//     for (let i = 1; i <= amount; i += 1) {
//         const boxesEl = document.createElement("div");
//         boxesEl.style.width = `${20 + i * 10}px`;
//         boxesEl.style.height = `${20 + i * 10}px`;
//         boxesEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
//         boxes.append(boxesEl);
//     }
// }


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

