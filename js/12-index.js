//перебираючі методи
//cb - call back


// const fnA = function(cb){
// const a = 5   
//  cb(a)
// }

// const fnB = function (number){
// console.log(number);
// }
 
// fnA(fnB);
// fnA(5);
// fnA('hrllo');
// fnA({a : 5});
// fnA({});



// const numders = [5, 10, 15, 20, 25];
// let total = 0;



const numbers = [5, 10, 15, 20, 25] ;
let total = 0;

numbers.forEach(function(number){
    if(number % 2 === 0){
        total += number;
    }
})


console.log(total);

//10 % 3 = 1
//20 % 5 = 0