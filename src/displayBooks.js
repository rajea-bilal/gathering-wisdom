const displayBooks = ({ items: books}) => {
    // console.log(books)
    const section = document.querySelector('.books-center')
    const title = document.querySelector('.bookSectionTitle')
    const infoTitle = document.querySelector('.bookSectionText')
  
    console.log(section, title, infoTitle)

    // if the drinks array is null then show the error message
    if(!books) {
        title.textContent = 'Oops, no matching results for your search.'
        section.innerHTML = null
        infoTitle.innerHTML = null
        return;
    }

    // iterate over each object in the array and dispay it in the section
    const newBooks = books.map((book) => {
        console.log(book)
        const { id } = book
        const { title: bookTitle, authors, description: desc } = book.volumeInfo
        const { thumbnail: img } = book.volumeInfo.imageLinks
        console.log( `id: ${id}, bookTitle: ${bookTitle}, authors: ${authors}, description: ${desc}desc, image:${img}` )

        return `<!-- single book -->
        <a href="book.html?id=${ id }">
            <article class="books-box">
                <img src=${ img } alt=${ bookTitle } class="book-img">
                <h3 class="bookTitle">${ bookTitle }</h3>
            </article>
            </a>
             <!-- single book -->`
             
    }).join('')
    // hide loading
    title.innerHTML = 'Your selection of books'
    section.innerHTML = newBooks
    return section
}
             
        
       
 
export { displayBooks }