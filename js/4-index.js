// Рядки ''

// const message = 'Я піднімала руку на уроці 8 разів. ';
// console.log(message.length);
// console.log(message.lastIndexOf('к'));

//конкатинація

//  const firstName = 'Marina ';
//  const lastName = 'Ukrainets';
//  const plain = 'airlines';
//  const fullname = `${5 +5} minutes for goes ${plain}`;

//  console.log(fullname);


// const firstName = 'Marina ';
// const lastName = 'Ukrainets';
// const fullname = `Hello, ${firstName} ${lastName}!`;

// console.log(fullname);


//   const firstName = 'Mango';
//   const lastName = 'Lee';
//   const room = 716;
//   const type = 'VIP';
// const customersMsg = `Гість ${firstName} ${lastName} заселяється в ${room} номер ${type}` ;
// console.log (customersMsg)


// const firstName = prompt ( 'Your name');
// const lastName = prompt( 'Your surname');
// const age = prompt( 'Your age');
// const text = `Користувач ${firstName} ${lastName} віком ${age} має доступ до аккаутну!`;
// console.log(text);


// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';

// const string1 = 'Привіт, я Марк Цукерберг, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLocaleLowerCase().includes(blacklistedWord2.toLocaleLowerCase()));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));



//Додаткові
//
//  * Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .lastName, вивести в консоль кількість символів у рядку.
//  * Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр та вивести результат в консоль.


// const name = 'Marina';
// const lastName = 'Ukrainets';
// console.log(name.length + lastName.length);


// const name = 'Marina';
// console.log(name.toUpperCase());


// * Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.
//  * Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.

// const name = 'Marina';
// console.log(name.charAt());

// const name = 'Marina Ukrainets';
// console.log(name.indexOf(' '));


// * Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.
//  * Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".
//  */


// const name = 'Marina';
// console.log(name.replace('M','@'));

// const str = 'JavaScript';
// console.log(str.substring(0, 4));
