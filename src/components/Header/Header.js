import bookImage from '../../assets/darkCover.jpg';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = ({ onAdd }) => {
  return (
    <div className='header-wrapper'>
     
      <Navbar  />
        <img src={bookImage} alt="books"/>
        <Form onAdd={ onAdd } />
        
    </div>
  )
}

export default Header