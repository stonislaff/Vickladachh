import {NavLink} from 'react-router-dom'
import logo from '../../templates/logo.png'
import './header.scss'

function Header(){
    return(
        <header>
            <nav className="navPanel">
                <div className="logo">
                    <NavLink to="/"><img src={logo}/></NavLink>
                </div>
                <div className="navMenu">
                    <NavLink to="/"><span>Пошук</span></NavLink>
                    <NavLink to="/"><span>Викладачі</span></NavLink>
                    <NavLink to="/"><span>Підтримка</span></NavLink>
                    <NavLink to="/"><span>Про нас</span></NavLink>
                    <NavLink to="/"><span>Контакти</span></NavLink>
                </div>
                <div className="login">
                    <NavLink to="/"><span>Увійти</span></NavLink>
                    <NavLink to="/"><span>Реєстрація</span></NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header