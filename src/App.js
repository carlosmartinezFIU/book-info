import Header from "./components/Header/Header";
import noImage from './assets/noImage.png'
import Button from './components/Button/Button';
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import axios from 'axios';
import Shelf from "./components/Shelf/Shelf";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import useLocalStorage from "./components/Hooks/useLocalStorage";

function App() {
  //Hook to hide/show Add Book Button
  const [showAddBook, setShowAddBook] = useState(false);

  //Hook to store api objects
  const [books, setBook] = useState([]);

  const [stored, setStored ] = useLocalStorage(['book']);





 //Fetching api from Google Books API using Axios
 //Parameter comes from Forum Component
  const getApi = (newBook) =>{
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newBook.title}&maxResults=40`)
      .then(response =>{
          setBook([...response.data.items]);

      }).catch(error => {
          alert("Error");
      })
  }

/*
  Function parameter: book id
  Iterates through the books array and comapres the objects id with the paramete given
*/
  const addingShelf = ( bookId ) =>{
    
    let foundItem = books.find(element =>  element.id === bookId );
    //foundItem = JSON.stringify(foundItem);
    { stored != null ? setStored([...stored, foundItem]) : setStored([foundItem]); }
  
  }

  const aaBB = (bookInfo) =>{
    let newList = stored.filter((e) =>  e.id !== bookInfo)
    setStored(newList);
  }





  /*
     Mapping through the returned function books to output certain 
     including : images, title, author, text-snippet.
  */
  const results = books.map((bookItem) => {
    //imageOfBook verifies if there is an image to return
    let imageOfBook = bookItem.volumeInfo.imageLinks&&bookItem.volumeInfo.imageLinks.smallThumbnail;

    //textSnippet verifies if there is any text to return
    let textSnippet = bookItem.searchInfo&&bookItem.searchInfo.textSnippet

     return <div key={bookItem.id} className={`book-item-container`}   >
              { imageOfBook ?<img className="image-container" alt={bookItem.title} src={imageOfBook}/> 
              : <img className="no-image" alt={bookItem.title} src={noImage}/> } 
              
                  
                    <p className="title"  >{bookItem.volumeInfo.title}</p>  
                   <p className="author">{bookItem.volumeInfo.authors}</p>      
                     {textSnippet ? <p className="text-snippet">{textSnippet}</p> : <p className="text-snippet">No Snippet Available</p>}  
                      <AiOutlinePlus className="plus-card-icon" onClick={() => addingShelf(bookItem.id)} />
            
            </div>
  })




  return (
    <Router>

            <div className="App">
              <Header />
              <Button btnClassname="add-book-btn" onAdd={() => setShowAddBook(!showAddBook)}  btnName="Add Book" formBool={showAddBook}/>
              {showAddBook && <Form onAdd={getApi} /> }
              <div className="book-container-One">
        <Routes>
              <Route path="/" element={ results } />
              <Route path="/shelf" element={<Shelf info={stored}  aaBB={aaBB} />} />
        </Routes>
              </div>
              <Footer />
            </div>
        
    </Router>
  );
}


export default App;
