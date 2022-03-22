import './Footer.css';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-item-container'>
          <p>Designed by Carlos Martinez-Cortes</p>
          <FaGithub className='github-logo' href='https://github.com/carlosmartinezFIU'/>
        </div>
    </div>
  )
}

export default Footer