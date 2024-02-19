// const person = {
//     name : 'Marina',
//     age : 15,
//     gender : 'female'
// } ;
// person.age += 6;
// person.university = 'Holywood';
// console.log(person);




// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     changeName(newName){
//     return this.name = newName
//     },
//     addTrack(track){
// this.tracks.push(track)
//     },
//     updateRating(newRating){
//         this.rating = newRating
//     },
//     getTrackCount(){
//        return this.tracks.length
//     }
// }
// console.log(playlist);
// playlist.changeName('Супер плейлист');
// playlist.addTrack('трек-4')
// playlist.updateRating(10)
// console.log(playlist.getTrackCount());
// console.log(playlist);


//1*
// Створіть об'єкт "person" з властивостями
//  "name", "age", "gender". Додайте до об'єкту 
//  метод, який буде виводити на 
// екран повідомлення про особистість зі 
// значеннями всіх властивостей.


// const person = {
//     name: 'Marina',
//     age: 15,
//     gender: 'female',
// getPersonData(){
//   return  console.log(`Ваше ім'я:  ${this.name}, ваш вік:  ${this.age}, ваша стать:  ${this.gender}`);
// }
// }
// person.getPersonData();




//2*
// Створіть масив об'єктів "students", 
//де кожен об'єкт буде містити властивості "name",
// "age", "gender" та "grade". Напишіть функцію,
// яка приймає масив об'єктів "students"
// і повертає середній бал групи.


// const students = [
// {
//     name: 'student-1',
//     age: 15,
//     genger: 'female',
//     grade:9,

// },
// {
//     name: 'student-2',
//     age: 17,
//     genger: 'male',
//     grade:8,
// },
// {
//     name: 'student-3',
//     age: 16,
//     genger: 'female',
//     grade:10,
// },
// ]
// const getAverageGrade = function(students){
//     let totalGrade = 0;
// for(let student of students){
//    totalGrade += student.grade
//     // console.log(student.grade);
//     console.log(student);
// }
// const averageGrade = totalGrade / students.length;
// return averageGrade
// }
// console.log(getAverageGrade(students));



//Перебір об'єктів


//ВАРІНАТИ ЗВЕРНЕННЯ ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА
// const feedback = {
// good: 5,
// neutral: 10,
// bad: 3,
// };
// const good = 'good';

// feedback.good
// feedback['good']
// feedback[good]


// const feedback = {
// good: 5,
// neutral: 10,
// bad: 3,
// };
// const keys = Object.keys(feedback)
// console.log(keys);
// for(const key of keys){
//     console.log(key);
//     console.log(feedback[key]);

//     feedback.key
// }

// const values = Object.values(feedback)
// console.log(values);
// for (const value of values){
//     console.log(value);
// }

// console.log(feedback);



// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//     ];
    
//         for (const friend of friends){
//             console.log(friends.name);
//             friend.property = 10;
//         }
//  console.table(friends)

//  const findFriendByName = function(friends, name){
// for (const friend of friends){
//   console.log(friend.name);
//   if(friend.name === name){
//     console.log(`Користувача ${name} знайдено`);
//   }else{
//     console.log(`Користувача ${name} не знайдено`);
//   }
// }
//  }


// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));



// const playlist = {
//     name: 'Мій супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     };
//     const {name, rating, trackCount, tracks} = playlist
//     console.log(name, rating,tracks,trackCount);

const cart = {
    items: [],
    getItems() {
    console.log(this.items)
    },
    add(product) {
    this.items.push(product)
    },
    remove(productName) {
    let index;
    for (const item of this.items){
    if (item.name === productName){
    index = this.items.indexOf(item);
    this.items.splice(index, 1);
    }
    }
    return this.items;
    },
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
    };
    cart.add({ name: '🍎', price: 50 });
    cart.add({ name: '🍇', price: 70 });
    cart.add({ name: '🍋', price: 60 });
    cart.add({ name: '🍓', price: 110 });
    console.log(cart);
    console.log(cart.getItems());
    console.log(cart.remove('🍎'));
    console.log(cart.remove('🍋'));