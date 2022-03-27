import bookImage from '../../assets/line-book.jpg';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Navbar />
        <img src={bookImage} alt="books"/>
        <p>My Book Tracker</p>
    </div>
  )
}

export default Header