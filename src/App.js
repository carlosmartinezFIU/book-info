import Header from "./components/Header/Header";
import noImage from './assets/noImage.png'
import Button from './components/Button/Button';
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import axios from 'axios';
import Book from "./components/Book/Book";

function App() {
  //Hook to hide/show Add Book Button
  const [showAddBook, setShowAddBook] = useState(false);

  //Hook to store api objects
  const [books, setBook] = useState([]);



 //Fetching api from Google Books API using Axios
 //Parameter comes from Forum Component
  const getApi = (newBook) =>{
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newBook.title}`)
      .then(response =>{
          console.log(response.data.items);
          setBook([...response.data.items]);
          

      }).catch(error => {
          alert("Error");
      })
  }


  //Mapping through the returned function books to output certain including : images, title, author, text-snippet
  const results = books.map((bookItem) => {
    let imageOfBook = bookItem.volumeInfo.imageLinks&&bookItem.volumeInfo.imageLinks.smallThumbnail;
    let textSnippet = bookItem.searchInfo&&bookItem.searchInfo.textSnippet

     return <div key={bookItem.id} className="book-item-container">
              {imageOfBook ?<img className="image-container" src={imageOfBook}/> : <img className="no-image" src={noImage}/>} 
              <div className="book-title-author-desc">
                  <div className="book-info-wrapper">
                      <p className="title">{bookItem.volumeInfo.title}</p>
                      <p className="author">{bookItem.volumeInfo.authors}</p>
                      {textSnippet ? <p className="text-snippet">{textSnippet}</p> : <p className="text-snippet">No Snippet Available</p>}
                  </div>
              </div>
            </div>
  })




  return (
    <div className="App">
      <Header />
      <Button btnClassname="add-book-btn" onAdd={() => setShowAddBook(!showAddBook)}  btnName="Add Book" formBool={showAddBook}/>
      {showAddBook && <Form onAdd={getApi} /> }
      <div className="book-container-One">
        { results }
      </div>
      <Footer />
    </div>
  );
}


export default App;
