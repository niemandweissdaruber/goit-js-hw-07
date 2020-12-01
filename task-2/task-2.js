const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");

const createElement = ingredients.map((acc) => {
  const liElement = document.createElement("li");
  liElement.textContent = acc;

  ingredientsListEl.append(liElement);
});
