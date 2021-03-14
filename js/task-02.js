const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientList = document.querySelector('#ingredients');

const createList = (ingredients) => {
    return ingredients.map(elem => {
        const listEl = document.createElement('li');
        listEl.textContent = elem;
        listEl.style.listStyle = 'none';
        return listEl;
    })
}

ingredientList.append(...createList(ingredients))

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


