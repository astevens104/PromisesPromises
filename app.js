// fetch("https://jsonplaceholder.typicode.com/users/1")
// const emailRef =document.querySelector(".email")
// console.log(emailRef)

// 1. Then

//  fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//      return response.json()
//  }).then(data => {
//          emailRef.innerHTML = data.email
//      });


// Order is different because of the amount of time required to execute the js.  Therefore, the console.log(3) will execute before the console.log(2 has finished doing it's thing)
  

//response.json() is converting something we got from the backend into something compatible w/ the frontend

// 2. Async/Await

// async function main() {
// 
//  await REQUIRES an async function to operate properly
//   await needs to be INSIDE an async function
//  async/await returns the response for us
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

//   we unlocked the information by using await and storing the information in a variable ('data')  
//     const data = await response.json() {
 
//     emailRef.innerHTML = data.email
// }
// // the console.log (1,2,3) shows us the code is being executed in order
//main()


// Main takeaway: Then runs in the background
// Async/await runs line by line

// How to create a promise:

//If promise is succesful, we resolve
// otherwise, we reject

const statusRef = document.querySelector('.status')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })  
}

// 1. Then
//  getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
async function main() {
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status
}

main();