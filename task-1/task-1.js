const itemEl = document.querySelectorAll(".item");

const countCategories = `В списке ${itemEl.length} категории.`;
console.log(countCategories);

itemEl.forEach(function (element) {
  console.log(
    `Категория: ${element.firstElementChild.textContent}
    Количесво элементов: ${element.lastElementChild.children.length}`
  );
});
