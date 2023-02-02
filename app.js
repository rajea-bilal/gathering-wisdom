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
    const removeWhiteSpace = userValue.split(' ').join('')
    console.log(removeWhiteSpace)
    const url = `https://www.googleapis.com/books/v1/volumes?q=${removeWhiteSpace}&maxResults=10`
    // console.log(url)
    presentBooks(url)

})
   
// filtered search link that will fetch books only by james clear. This is what I want to be able to do with the input value from the user. 
// 'https://www.googleapis.com/books/v1/volumes?q=inauthor:"james+clear"&maxResults=10











