import bookImage from '../../assets/bookCase.jpeg';
import './Header.css';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <img src={bookImage} alt="books"/>
        <p>My Book Tracker</p>
    </div>
  )
}

export default Header