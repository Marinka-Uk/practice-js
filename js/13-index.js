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


// const linkRef = document.querySelector(".site-nav__link")
// const text = document.createElement('p');
// text.textContent = 'Привіт, це перший мій створений елемент!';
// text.classList.add('tittle');
// console.log(text);

// document.body.innerHTML = text.textContent



//Створити  зображення та кнопку зі всіма обов’язковими
// атрибутими (можна використати абсолютний або відностий 
//шлях до зображення) та додати їх на сторінку










// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');


// targetBtn.addEventListener('click', onClick)
// removeListenerBtn.removeEventListener('click', onClick )
// function onClick(event){
//     console.log(event.target);
// }




//const form = document.querySelector('.js-register-form');


// form.addEventListener('submit', onSubmit)
// function onSubmit(event){
//     event.preventDefault()
//     const form = event.currentTarget
//     const password = form.elements.password.value
//     console.log(password);

// }



// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const licenseCheckbox = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');


// input.addEventListener('input', (event)=>{
//     console.log((event.currentTarget.value));
//     nameLabel.textContent += event.currentTarget.value
// })






// const containerEl = document.querySelector('body')
// const listEl = document.querySelector('.site-nav')

// const titleRef = document.createElement('h1')
// titleRef.textContent = 'My first element' ;
// titleRef.classList.add('title');
// titleRef.style.color = 'tomato'  ;

// console.log(titleRef);


// listEl.after(titleRef)




const titleEl = document.querySelector('.title');
console.log(titleEl,);
console.log();