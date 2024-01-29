//Функції

//Function expression

// const fnA = function (a, b){
//     console.log(a);
//     console.log(b);
//     console.log('hello');
// }

// fnA(5, 6);
// fnA(14, 59);
// fnA(124, 52);


// const fnA = function (a, b){
//   return a + b;
// }

// const result1 = fnA(5, 10 )
// console.log(result1);

// const result2 = fnA(15, 20 )
// console.log(result2);

// const result3 = fnA(45, 160 )
// console.log(result3);



/*
 * Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
 * Заголовок статті складається тільки з букв та пропусків
 */

// const slugify = function (string){
//     const slugTitle = string.toLoaleLowerCase().split(' ').join('-');

// }


/*
 * Напиши функцію calculateTotalPrice(items)
 * яка приймає масив цін і повертає їх сумму
 */

// const calculateTotalPrice = function (items){
//     let sum = 0;
// for (let number of items ){
//      sum += number;
     
// }
// return sum;
// }  



// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600



 //Напиши функцію logItems(items) для перебора і логування массива

// const logItems = function (items){
//     for (let i of items){
// console.log(i);
//     }
// }

  
// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);


/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 */


// const findLogin = function(logins, loginToFind){
// for(let login of logins){
//     if(login === loginToFind){
// console.log( `Користувач ${loginToFind} знайдено.`);
//     }
// }
// }


// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));



//*
//псевдомасив arguments


// const calculateTotalPrice = function (){
// console.log(arguments);
// const args = Array.from(arguments)
// console.log(args);

// let total = 0;
// for(let hgh of args){
// total += hgh
// }
// return total;
// }

// const result = calculateTotalPrice(1, 2, 3 );
// console.log(result);
// calculateTotalPrice(5, 12, 33 );
// calculateTotalPrice(9, 245, 39 );


// const calculateTotalPrice = function (...args){
// console.log(args);
//     let total = 0;

//     for(let mdrm of args){
//         total +=mdrm
    
//     }
//     return total;
// }
// const result = calculateTotalPrice(1, 2, 3);
// console.log(result);



/*
     * Напиши функцію filterNumbers(array [, number1, ...]) яка:
     * - першим аргументом приймає масив чисел
     * - після першого аргумента може бути довільна кількість інших аргументів які будуть числами,
     * - Функція повина повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
     *   для яких є аналог в оригінальному масив.
     */

// const filterNumbers = function (array, ...args){
//     const  equalNumbers = [];
//     for(let number of args){
//       const isEqual =  array.includes(number);
//         if(isEqual){
//             equalNumbers.push(number)
//         }
//     }
//     return equalNumbers;
//}



// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
    // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
    // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]