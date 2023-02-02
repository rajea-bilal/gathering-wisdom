import { showBooks as presentBooks } from './src/presentBooks.js'


const runPresentBooks = () => {
    const inputValue = document.querySelector('.searchField').value
    console.log(inputValue)

    const removeWhiteSpace = inputValue.split(' ').join('')
    console.log(removeWhiteSpace)

    const addPlus = inputValue.split(' ').join('+')
    console.log(addPlus)

    const url = `https://www.googleapis.com/books/v1/volumes?q=${ removeWhiteSpace }+inauthor:${ addPlus }&maxResults=10`
    console.log(url)
    presentBooks(url)
}


// selecting the input box 

const searchBtn = document.querySelector('.search-btn')
// adding event listener on the search button, to fire runPresentBooks function
searchBtn.addEventListener('click', runPresentBooks)














