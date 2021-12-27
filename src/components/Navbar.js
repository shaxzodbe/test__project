import React, {useState} from 'react';
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import telegram from '../img/telegram.png'

const Navbar = () => {

    const [lightMode, setLightMode] = useState(false)

    function lightThemeToggle() {
        setLightMode(!lightMode)
    }

    return (
        <nav className={lightMode ? 'light__mode' : ''}>
            <div className="nav__group flex">
                <a href="#" className="nav__link">
                    <i className='bx bxs-phone bx-rotate-270'></i><span>+998 97 156 69 63</span>
                </a>
                <a href="#" className="mesage__link"><img src={facebook} alt=""/></a>
                <a href="#" className="mesage__link"><img src={instagram} alt=""/></a>
                <a href="#" className="mesage__link"><img src={telegram} alt=""/></a>
            </div>
            <div className="nav__group">
                <input type="text" placeholder="Поиск"/>
                <a href="#"><i className='bx bx-search'></i></a>
            </div>
            <div className="nav__group">
                <a href="#" className="nav__link">
                    <i className='bx bxs-cart'></i>
                </a>
                <button><i className='bx bx-world'></i>ru</button>
                <button><i className='bx bx-exit'></i>Войти</button>
                <div className="switch">
                    <input id="switch" className="switch__input" name="switch" type="checkbox"/>
                    <label className="switch__label" htmlFor="switch"></label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;