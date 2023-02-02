import { fetchBooks } from './fetchBooks.js'
import { displayBooks } from './displayBooks.js'

// main function responsible for fetching and displaying the drinks
const showBooks = async (url) => {
    try {
        // fetch drinks
        console.log(url)
        const data = await fetchBooks(url)
        // console.log(data)

        // display drinks
        const section =  displayBooks(data)
        console.log(section)
    }
    catch(error) {
        console.log(error)
    }
}

export { showBooks }