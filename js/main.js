const searchFeild = () => {

    const searchInput = document.getElementById('search-Input');
    const searchText = searchInput.value;
    

    // clearing search input value
    searchInput.value = ''

    // call API
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(res => res.json())
    .then(data => book(data.docs))
}

const book = books => {
    //  show founded result number
    const bookResult = document.getElementById('result-Found')
    if(books.length === 0){
        bookResult.innerText = `Sorry, No result found`
    }
    else{
        bookResult.innerText =`Search result: ${books.length}`
    }

    // show search result 
    const bookContainer = document.getElementById('book-container')
    bookContainer.textContent = ''


    books.forEach(book => {
    
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100 fw-bold shadow-lg">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Book Name: ${book.title}</h5>
                <p class="card-text">Author Name: ${book.author_name}</p>
                <p class="card-text">Publisher: ${book.publisher[0]}</p>
                <p class="card-text">Publishing Year: ${book.first_publish_year}</p>
            </div>
        </div>
        `;
        bookContainer.appendChild(div)
    });
    
}