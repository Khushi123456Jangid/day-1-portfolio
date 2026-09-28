// ==== Get HTML elements ====
let bookForm=document.getElementById('bookForm');
let BookNameInput=document.getElementById('bookName');
let authorInput=document.getElementById('author');
let bookList=document.getElementById('bookList');
let bookCount=document.getElementById('bookCount');
// ==== Get Saved Books ====
let books=JSON.parse(localStorage.getItem('books')) || [];
// ==== Display Books When Page Load ====
displayBooks();
// ==== Form Submit ====
bookForm.addEventListener("submit", function(event){
    event.preventDefault();
    // Get Values
    let bookName=BookNameInput.value.trim();
    let author=authorInput.value.trim();
    // create books object
    let book={
        name:bookName,
        author:author
    };
    // add objeects to array
    books.push(book);
    // save array
    saveBooks();
    // display books
    displayBooks();
    // clear form
    bookForm.reset();
});
// ==== Save Books ====
function saveBooks(){
    localStorage.setItem("books",JSON.stringify(books))
}
// ==== Display Books ====
function displayBooks(){
    bookList.innerHTML="";
    // check is=f no books exist
    if(books.length===0){
        bookList.innerHTML=`
            <div class="empty-message">
                <div class="empty-icon">
                    <i class="fa-solid fa-book-open"></i>
                </div>
                <h3>No Books Yet</h3>
                <p>Add your first book above</p>
            </div>
        `;
    }
    // display every book
    books.forEach(function(book,index){
        let bookCard=document.createElement("div");
        bookCard.className="book-card";
        bookCard.innerHTML=`
            <div class="book-info">
                <div class="book-icon">
                    <i class="fa-solid fa-book"></i>
                </div>
                <div class="book-details">
                    <h3>${book.name}</h3>
                    <p>Author :${book.author}</p>
                </div>
            </div>
            <button class="delete-button" onclick="deleteBook(${index})">Delete</button>
        `;
        bookList.appendChild(bookCard);
    });
    bookCount.textContent=books.length+(books.length===1?"Book":"Books");
}
// ==== Delete Book ====
function deleteBook(index){
    books.splice(index,1);
    saveBooks();
    displayBooks();
}
displayBooks();

