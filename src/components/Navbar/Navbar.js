import { Link } from "react-router-dom"
import { HiHome } from "react-icons/hi"
import { GiBookshelf } from 'react-icons/gi';
import './Navbar.css';

const Header = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='button-container'>
           <Link to="/" > <HiHome className="home-btn"/> </Link>
            <Link to="/shelf" > <GiBookshelf className="shelf-btn" /> </Link>
        </div>
    </div>
  )
}

export default Header