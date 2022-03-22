import { useState } from 'react';
import './Book.css';

const Book = (props) => {

  

  return (
  
      <div className="book-wrapper" style={{ backgroundImage: `url(${props.bookImg})`}}>
        <p className="book-title"></p>
        <p className="book-author"></p>
      </div>

  )
}

export default Book

/*
style={{backgroundImage: `url(${  })` }
 <img src={props.bookSource}/> 



 <div className="book-wrapper">
        <p className="book-title"></p>
        <p className="book-author">{}</p>
     </div>

*/ 