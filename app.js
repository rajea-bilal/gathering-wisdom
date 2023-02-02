import { showBooks as presentBooks } from './src/presentBooks.js'
// import './src/searchForm.js'

// const url = `https://www.googleapis.com/books/v1/volumes?q=jamesclear&key=AIzaSyDY9bFJdLhkjZkhw2iS83bDjMU3MkCs8CU`

// window.addEventListener("DOMContentLoaded", () => {
//     presentBooks(url)
// })

// selecting the input box 
const input = document.querySelector('#input-box')



// adding an event listener on the input box
input.addEventListener('keyup', () => {

    const userValue = input.value
    const removeWhiteSpace = userValue.split(' ')
    console.log(removeWhiteSpace)
    const apiKey = 'AIzaSyDY9bFJdLhkjZkhw2iS83bDjMU3MkCs8CU'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${removeWhiteSpace}&maxResults=10&key=${apiKey}`
    // console.log(url)
    presentBooks(url)

   
})









