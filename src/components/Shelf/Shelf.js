import noImage from '../../assets/noImage.png';
import { GrClose } from "react-icons/gr";
import './Shelf.css';
import { useEffect, useState } from 'react';


const Shelf = ({ info, aaBB }) => {

    console.log(info);
      
    let storeData = localStorage.getItem("book");
    storeData = JSON.parse(storeData);

    const deleteData = (bookId) =>{
       aaBB(bookId);
    }


  return (
    <>
   { storeData != null ? storeData.map(ele =>{

      //imageOfBook verifies if there is an image to return
      let imageOfBook = ele.volumeInfo.imageLinks&&ele.volumeInfo.imageLinks.smallThumbnail;

      //textSnippet verifies if there is any text to return
      let textSnippet = ele.searchInfo&&ele.searchInfo.textSnippet;

      return <div key={ele.id} className="shelfed-books-container" >
                { imageOfBook ?<img className="image-container" alt={ele.title} src={imageOfBook}/> 
                : <img className="no-image" alt={ele.title} src={noImage}/> } 
                  <p className="title"  >{ele.volumeInfo.title}</p>  
                  <p className="author">{ele.volumeInfo.authors}</p>      
                  {textSnippet ? <p className="text-snippet">{textSnippet}</p> : <p className="text-snippet">No Snippet Available</p>}
                  <GrClose className='close-btn' onClick={() => deleteData(ele.id)}/>
             </div>
      }) 
      : <div>No Book Available</div>}




    </>
   
  )
}

export default Shelf