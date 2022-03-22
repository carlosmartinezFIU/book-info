import Button from "../Button/Button"

const Header = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='button-container'>
            <Button btnName={'Home'} destination={"#"}/>
            <Button btnName={'Home'} destination={"#"}/>
        </div>
    </div>
  )
}

export default Header