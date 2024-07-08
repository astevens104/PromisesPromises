// fetch("https://jsonplaceholder.typicode.com/users/1")

// 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
    })
})   

//response.json() is converting something we got from the backend into something compatible w/ the frontend

// 2. Async/Await