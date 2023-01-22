// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const categoriesArrow = document.querySelector('.categories-nav__more-arrow')
const categoriesList = document.querySelector('.categories-nav__list')

categoriesArrow.addEventListener('click', () => {
    categoriesArrow.classList.toggle('_open')
    categoriesList.classList.toggle('_open')
})