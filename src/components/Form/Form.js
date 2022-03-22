import { useState } from 'react';
import './Form.css';

const Form = ({ onAdd }) => {

    const [title, setTitle] = useState("");

    const addingBook = (e) =>{
        e.preventDefault();

        if(!title)
        {
            alert("Please input a Title")
        }
        onAdd({ title })
        setTitle("");
    }



  return (
  <>
    <form className="form-container"  onSubmit={addingBook} >
        <div className='author-title-container'>
            <div className='title-container'>
                <p>Search</p>
                <input placeholder="Add Title" type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
        </div>
        <input className='submit-form' value="Submit" type="submit"/>
    </form>
    </>
  )
}

export default Form