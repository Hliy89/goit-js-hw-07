const inputEl = document.getElementById('name-input');
const inputName = document.getElementById('name-output');

inputEl.addEventListener("input", function () {
    if (inputEl.value !== "") {
        inputName.textContent = this.value;
    } else {
        inputName.textContent = "незнакомец";
    }
});

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.