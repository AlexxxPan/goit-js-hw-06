"use strict";

// const totalCategories = document.querySelector('#categories');
// console.log(`Number of categories: ${totalCategories.children.length}`);
// const itemEl = totalCategories.querySelectorAll('.item');
// const itemConsoleLog = item => {
// const itemHeader = item.querySelector('h2');
// const itemElements = item.querySelectorAll('ul li');
// console.log(`Category: ${itemHeader.textContent}
// Elements: ${itemElements.length}`);
// };
// console.log(itemEl.forEach(item => itemConsoleLog(item)));

// !=================================================================
// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);
// const categoriesArray = [...totalCategories].map(
//     categories => `Category: ${categories.children[0].textContent}
//     Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);
// !=================================================================

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
