const inputEl = document.getElementById('validation-input');
const dataLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", function () {
    inputEl.value.length === dataLength ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
})

inputEl.addEventListener("input", function () {
   inputEl.classList.remove('valid');
   inputEl.classList.remove('invalid');
})

// inputEl.addEventListener("blur", function () {
//     if (inputEl.value.length === dataLength) {
//         inputEl.classList.add('valid');
//     } else {
//          inputEl.classList.add('invalid');
//     }
// })

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.