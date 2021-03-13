// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ingredientsList = document.querySelector("#ingredients")

// // const itemEl = document.createElement("li")
// // ingredientsList.appendChild(itemEl)
// const listEl = ingredients => {
//     return ingredients.map(ingredient => {
//         const item = document.createElement("li");
//         item.textContent = ingredient;
//         item.style.listStyle = "none";
//         return item;
        
//     })
    
// }
// const elemIngredients = listEl(ingredients)
// ingredientsList.append(...elemIngredients)
// console.log(ingredientsList)

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().