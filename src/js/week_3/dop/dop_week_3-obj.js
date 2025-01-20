const getTotalPriceOfShoppingBag = (shoppingBagArray) => {
    const groceries = {
        "73Wakv": {
            name: "Orange Juice",
            price: 1.5,
            discount: 10,
        },
        "5L3db9": {
            name: "Chocolate",
            price: 2,
            discount: 0,
        },
    };

    let sum = 0;
    for (const product of shoppingBagArray) {
        const discount = groceries[product.productId].discount;

        if (discount > 0) {
            const price =
                groceries[product.productId].price * (1 - discount / 100);
            sum += price * product.count;
        } else {
            const price = groceries[product.productId].price;
            sum += price * product.count;
        }
    }
    return sum.toFixed(2);
};

// console.log(
//     getTotalPriceOfShoppingBag([
//         { productId: "73Wakv", count: 3 },
//         { productId: "5L3db9", count: 23 },
//     ])
// );

const startGame = (heroPlayer, enemyPlayer) => {
    heroPlayer.heatEnemy = (enemy) => (enemyPlayer.health -= 10);
    enemyPlayer.heatHero = (hero) => (heroPlayer.health -= 10);
    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let flag = true;
    let favorite = {}

    while (flag) {
        if(heroPlayer.health <= 0)  {
            favorite = {...enemyPlayer}
            flag = !flag
        } else if (enemyPlayer.health <= 0) {
            favorite = {...heroPlayer}
            flag = !flag
        }
        const random = getRandomNumberInRange(0, 1);

        random ?  heroPlayer.heatEnemy(enemyPlayer) : enemyPlayer.heatHero(heroPlayer)
    }
};

// console.log(
//     startGame({
//     name: "Batman",
//     health: 100,
// },{
//     name: 'Joker',
//     health: 100,
//  })
// );



const getKiller = (suspectInfo, deadPeople) => {
    const filtered = {};
    
    for (const key in suspectInfo) {
        if (!suspectInfo[key].length) {
            continue;
        }
        filtered[key] = 0;
        for (let i = 0, len = deadPeople.length; i < len; i++) {
            if (suspectInfo[key].includes(deadPeople[i])) {
                filtered[key] += 1;
            }
        }
    }

    const arrFiltered = Object.entries(filtered);
    let criminal = arrFiltered[0];
    if (arrFiltered.length === 1) {
        return arrFiltered[0][0];
    }
    for( let i = 1; i < arrFiltered.length; i++) {
        if(criminal[1] < arrFiltered[i][1]) {
            criminal = arrFiltered[i]
        }
    }

    return criminal[0];
};

// console.log(
//     getKiller(
//         {
//             James: ["Jacob", "Bill", "Lucas"],
//             Johnny: ["David", "Kyle", "Lucas"],
//             Peter: ["Lucy", "Kyle"],
//         },
//         ["Lucas", "Kyle", 'David']
//     )
// ); // Убийца Johnny

// console.log(
//     getKiller(
//         {
//             Brad: [],
//             Megan: ["Ben", "Kevin"],
//             Finn: [],
//         },
//         ["Ben"]
//     )
// ); // Убийца Megan


const getWinner = (applicants, winnerObject) => {
    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const winnerBillet = String(getRandomNumberInRange(0, 1000)).padStart(3, '0');
    console.log(winnerBillet)

    if (winnerBillet in applicants) {
        return {...winnerObject,...applicants[winnerBillet]}
    }
};

// console.log(getWinner(
//     {
//         "001": {
//             name: "Максим",
//             age: 25,
//         },
//         201: {
//             name: "Светлана",
//             age: 20,
//         },
//         304: {
//             name: "Екатерина",
//             age: 35,
//         },
//     },
//     {
//         prize: "10 000$",
//     }
// ));

const usersArray = [
    { id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
    { id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
    { id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
    { id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
    { id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 },
];

const usersObject = {
    "34rdca3eeb7f6fgeed471198": {
        id: "34rdca3eeb7f6fgeed471198",
        name: "Andrew",
        age: 25,
    },
    "76rdca3eeb7f6fgeed471100": {
        id: "76rdca3eeb7f6fgeed471100",
        name: "Alexey",
        age: 15,
    },
    "12rdca3eeb7f6fgeed4711012": {
        id: "12rdca3eeb7f6fgeed4711012",
        name: "Egor",
        age: 13,
    },
    "32rdca3eeb7f6fgeed471101": {
        id: "32rdca3eeb7f6fgeed471101",
        name: "Kate",
        age: 31,
    },
    "98rdca3eeb7f6fgeed471102": {
        id: "98rdca3eeb7f6fgeed471102",
        name: "Elena",
        age: 18,
    },
};

function getAdultUsers(valuesList) {
    function isObject(value) {
        return Object.prototype.toString.call(value) === "[object Object]";
    }
    if (isObject(valuesList)) {
        const convertObjInArray = Object.entries(valuesList);

        return Object.fromEntries(
            convertObjInArray.filter((item) => item[1].age >= 18)
        );
    } else if (valuesList.length > 0 && Array.isArray(valuesList)) {
        return valuesList.filter((item) => item.age >= 18);
    }
}

console.log(getAdultUsers(usersArray));
/*
  [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
  ]
  */

console.log(getAdultUsers(usersObject));
/*
  {
    '34rdca3eeb7f6fgeed471198': { 
    id: '34rdca3eeb7f6fgeed471198', 
    name: 'Andrew', 
    age: 25 
    },
    '32rdca3eeb7f6fgeed471101': { 
    id: '32rdca3eeb7f6fgeed471101', 
    name: 'Kate', 
    age: 31 
    },
    '98rdca3eeb7f6fgeed471102': { 
    id: '98rdca3eeb7f6fgeed471102', 
    name: 'Elena', 
    age: 18 
    }
  }
  */
