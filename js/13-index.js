//DOM


/*
* Інтерфейс classList
* - add(клас)
* - remove(клас)
* - toggle(клас)
* - replace(старийКлас, новийКлас)
* - contains(клас)
*/


// const navlistRef = document.querySelector('ul')
// navlistRef.classList.add('nav-list')
// navlistRef.classList.add('js-nav-list')

// navlistRef.classList.remove('js-nav-list')

// navlistRef.classList.toggle('nav-list')
// navlistRef.classList.toggle('nav-list')
// navlistRef.classList.toggle('js-nav-list')

// navlistRef.classList.replace('js-nav-list', 'new-class')

// console.log(navlistRef.classList.contains('new-class'));
// console.log(navlistRef.classList);





//Створити заголовок з текстом 
//'Привіт, це перший мій створений елемент!' 
//та додати до нього клас “title”, заздалегідь створений
// в style.css. Додати заголовок на сторінку


const linkRef = document.querySelector(".site-nav__link")
const text = document.createElement('p');
text.textContent = 'Привіт, це перший мій створений елемент!';
text.classList.add('tittle');
console.log(text);

document.body.innerHTML = text.textContent



//Створити  зображення та кнопку зі всіма обов’язковими
// атрибутими (можна використати абсолютний або відностий 
//шлях до зображення) та додати їх на сторінку



   