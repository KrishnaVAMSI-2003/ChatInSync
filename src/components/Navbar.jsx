import icon from './assets/chat-icon.webp'
import './navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <img src={icon} className='nav__icon' alt='icon with two message boxes'/>
            <h1 className='nav__text'>ChatInSync</h1>
        </div>
    )
}
export default Navbar;