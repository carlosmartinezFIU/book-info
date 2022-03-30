import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
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
    <form className="form-container"  >
        <div className='author-title-container'>
            <div className='title-container'>
                <input className='search-input-bar' placeholder="Add Title" type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
        </div>
        
        <BiSearch type='submit' className='search-icon' onClick={addingBook}/>
        
        
    </form>
    </>
  )
}

export default Form