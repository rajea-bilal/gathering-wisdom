import { fetchBooks } from './fetchBooks.js'
import { displayBooks } from './displayBooks.js'


// main function responsible for fetching and displaying the books
const showBooks = async (url) => {
    try {
        // fetch books
        console.log(url)
        const data = await fetchBooks(url)
        // console.log(data)

        // display books
        const section =  displayBooks(data)
        console.log(section)
    }
    catch(error) {
        console.log(error)
    }
}

export { showBooks }