const inputControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

// inputControl.addEventListener("input", function (event) {
//     text.style.fontSize = event.currentTarget.value + "px";
//     console.log(event.currentTarget)
// })

// inputControl.addEventListener("input", function () {
//     text.style.fontSize = this.value + "px";
// })

inputControl.addEventListener("input", onInputChangeSize);

function onInputChangeSize() {
    text.style.fontSize = this.value + "px";
}

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.
