
// const coding = ["js","python","react","c++"]

//  let values = coding.forEach((item) =>{
//     console.log(item)
// })


// const myNums = [{title:'1', one:"one", },2,3,4,5]
// const  books = [
//     { title: 'The Origin', author: 'Martin' },
//     { title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling' },
// ];

// const newNums = myNums.filter((num) => {
//      return num > 2
// })
// console.log(newNums)


// let userBooks = books.filter((bk) => bk.title  === 'The Origin')
// console.log(userBooks)

// userBooks = books.filter((bk) => {return bk.title  === "The Origin" && bk.author  ==="Martin"} )
// console.log(userBooks)


// const myNums = [0,1,2,3,4,5,6,7,8,9,10];

// // const newNums = myNums.map((num) => {
// //     return num + 10
// // })
// // console.log(newNums)

// const numTotal = myNums.reduce((acc, curr) => acc + curr ,0)

// console.log(numTotal)




// const shoppingCard = [
//     { itemName : "Apple", quantity : 2, price: 80},
//     { itemName : "Banana", quantity : 3, price: 30},
//     { itemName : "Mango", quantity : 4, price: 60},
//     { itemName : "Grapes", quantity : 5, price: 40},
//     { itemName : "Orange", quantity : 1, price: 10},
// ]

// const priceTopay = shoppingCard.reduce((acc, item) => acc + item.price ,0 );
// console.log(priceTopay)

// fetch('https://randomuser.me/api/')
//   .then((res) => res.json())
//   .then((data) => {
//     let user = data.results[0];

//         // Define the fullName function
// const fullName = (user) => {
//     return user.name.title +' '+ user.name.first + ' ' + user.name.last;
//   };
  
//   // Call the fullName function with the 'user' object
//   const value = fullName(user);
  
//   // Log the result
//   console.log(value);

//     // Using for...in loop
//     for (let key in user) {
//       console.log(key + ':', user[key]);
//     }
//   })
//   .catch((err) => {
//     console.error("Error: " + err);
//   });


// let increasment = document.getElementsByClassName('increment');
// let decresment = document.getElementsByClassName('decriment');
// let qtyField = document.querySelectorAll('.reset');

//  const counterPlus = () {
  
//  }
function calculateArea(length, width) {
  return length * width;
}
// Example usage:
var length = 5;
var width = 3;
var area = calculateArea(length, width);
console.log("The area of the rectangle is: " + area);
