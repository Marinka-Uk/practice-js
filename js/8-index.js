//масиви []
//це колекція однотипних даних


// const num1 = 10;
// const num2 = 35;
// const myArray = [10, 25, 24, 12, 36];
// console.log(myArray[0]);
// myArray[0] = 15;
// console.log(myArray[1]);





//ітерація

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

// for(let i = 0; i <= names.length - 1; i += 1){
//     console.log(i);
//     console.log(names[i]);
// }





/*
 * Порахувати загальну суму покупок в корзині
 */


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let totalSum = 0;

// for (const numder of cart){
//     totalSum += numder

// console.log('total:', totalSum);
// }



/*
 * Нипиши скрипт який порахує суму всіх парних чисел в масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for(let number of numbers){
// if(number % 2 === 0){
//     total += number
// }
// }



// console.log(total);










/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

// const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
// const loginToFind = 'aj4xth3m4n';
// let message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдено.` :`Користувач ${loginToFind} не знайдено.`;

// console.log(message);

//умова ? true : false






//методи масиву


//const str = 'hello!';
//const arrStr = str.split('');
//console.log(arrStr);

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

// const reversArr = names.join(', ');
// console.log(reversArr); 

// names.push['Lera'];
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);
// names.unshift('Marko')
// console.log(names);


// const slicedNames = names.slice()
// console.log(slicedNames);

// const matrix=[[5, 2, 60],[0, 10, 20],[15, 15, 15]]
// const arr1 = [5, 2, 6];

// const concatedArrs = names.concat(arr1, matrix)
// console.log(concatedArrs);


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0]
// for (let i = 0; i < numbers.length; i +=1){
//     if(numbers [i] < smallesNumber){
//         smallesNumber = numbers[i]
//     }

// }

// console.log(smallesNumber);




//Методи масиву


// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

//видалення
 
// const spliceName =  names.splice(1, 2);
// console.log(spliceName);


//додавання

// names.splice(4, 0, 'Marina', 'Egor' )
// console.log(names);

//заміна

// names.splice(2, 1,  'Marina', 'Egor')
// console.log(names);






/**
 * /*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 */
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = friends.join(', ');
// console.log(string);

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'

/*
 * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

// const str = 'JavaScript';
// let reversStr = '' ;
// const strArr = str.split('');
// for(let letter of strArr) {
// if(letter === letter.toLowerCase()){
// reversStr += letter.toUpperCase();
// }else{
//     reversStr += letter.toLowerCase();
// }
// }

// console.log(reversStr);



/*
 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */
// Повинно вийти top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';
// console.log(title);

// const normalizedTittle = title.toLowerCase();
// console.log(normalizedTittle);

// const titleArr = normalizedTittle.split(' ');
// console.log(titleArr);

// const string = titleArr.join('-');
// console.log(string);


/*
 * Напиши скрипт який рахує суму елементів двух масивів.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const multiArr = array1.concat(array2);
// let multiArrAdded = 0;
// for (const num of multiArr){
//     multiArrAdded += num
// }

// console.log(multiArrAdded);