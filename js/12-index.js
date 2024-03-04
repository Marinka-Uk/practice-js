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



// const numbers = [5, 10, 15, 20, 25] ;
// let total = 0;

// numbers.forEach(function(number){
//     if(number % 2 === 0){
//         total += number;
//     }
// })


// console.log(total);

//10 % 3 = 1
//20 % 5 = 0




// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map((number) => {
//     return number * 2
// })



// console.log('numbers', numbers);
// console.log('doubleNums', doubleNums);




/*
* Збільшуємо кількість поінтів кожного гравця на 10 (розпорошуємо старий об'єкт)
// */
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    // ];
    // console.table(players);


//     const upatedPlayers = players.map((player) => {
// return {
//     ...player,
//     points: player.points + 10
// }
//     })

//     console.log(upatedPlayers);




// const numbers = [5, 10, 15, 20, 25];
// const filteredNubbers = numbers.filter((number) =>
// {
//   return number <= 10
// })
// console.log(filteredNubbers);



const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
    ];

//     const getOnlinePlayers = function(players){
//     const OnlinePlayers = players.filter((player) => {console.log(player);
//         return !player.online   
    
//     }) 

//     console.log(OnlinePlayers);
// }

// getOnlinePlayers(players)



// const hardcorePlayers = players.filter(({timePlayed})=>{
// return timePlayed > 250
// })

// console.table(hardcorePlayers);




//метод find


// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number)=>{return number === 15})
// console.log(number);

// const findplayerById = function (playersArr, playerId){
//    return playersArr.find((player)=>{return player.id === playerId})
// }
// console.log(findplayerById(players, 'player-1'));