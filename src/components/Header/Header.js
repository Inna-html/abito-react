import { Link } from 'react-router-dom'
import './Header.css'


export const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-box">

                        <Link to="/" className="header-logo">
                            <img src="/image/box.png" alt="logo" />
                            <span>Abito</span>
                        </Link>

                        <div className="header-controls">
                            <button className="btn btn-outline">Вход и регистрация</button>
                            <button className="btn btn-primary">Подать объявление</button>
                        </div>

                        <div className="header-burger">
                            <img src="/image/burger.png" alt="burger" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}