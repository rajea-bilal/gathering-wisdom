const createBookCards = async () => {
   

    const inputValue = document.querySelector('.searchField').value
    const apiKey = 'AIzaSyDY9bFJdLhkjZkhw2iS83bDjMU3MkCs8CU'
    const url = `https://www.googleapis.com/books/v1/volumes?q="${inputValue}"&maxResults=9&key=${apiKey}`
    const response = await fetch(url)
    const json = await response.json()
    const itemsArray = json.items

    // maximum description chars
    const maxDescSize = 150

    // looping through the array to access the objects inside, each object represents a book
    // saving all the various pieces of data I need in relevant variables to render to the DOM
    for(const key of itemsArray){
        let bookInfoObject = key.volumeInfo
        let bookTitle = bookInfoObject.title
        let bookAuthor = bookInfoObject.authors[0]
        let bookImage = bookInfoObject.imageLinks.thumbnail
        let bookDescription = bookInfoObject.description
        let pageCount = bookInfoObject.pageCount
        let bookLink = bookInfoObject.previewLink 

            // creating DOM elements & adding classes to them
            const parent = document.querySelector('#books-space')
            parent.classList.add('books-center')

            const cardOne = document.createElement("DIV")
            cardOne.classList.add("books-box")

            const titleBook = document.createElement("H3")
            titleBook.classList.add("bookTitle")
            titleBook.innerText = bookTitle

            const linkTag = document.createElement("A")
            linkTag.classList.add('project-1')
            linkTag.href = bookLink

            const image = document.createElement("IMG")
            image.classList.add('book-img')
            image.src = bookImage

            const author = document.createElement("H4")
            author.classList.add("author")
            author.innerText = bookAuthor

            // reducing description chars to less than 200
            const description = document.createElement("P")
            description.classList.add("bookDesc")
            
             let slicedDesc = bookDescription.slice(0, maxDescSize - 1)
             if(slicedDesc.length > maxDescSize - 2) {
                 slicedDesc = slicedDesc + "..."
                 description.innerText = slicedDesc
             }
           

                //appending the cards together
                parent.appendChild(cardOne)
                cardOne.appendChild(titleBook)
                cardOne.appendChild(linkTag)
                linkTag.appendChild(image)
                cardOne.appendChild(author)
                cardOne.appendChild(description)

            //  plugging values in the DOM
           
            console.log(`${bookTitle}: ${bookAuthor} --- ${pageCount}, ${bookLink}`)
        }
    
    }

           
    const searchBtn = document.querySelector('.search-btn')
    searchBtn.addEventListener('click', createBookCards)