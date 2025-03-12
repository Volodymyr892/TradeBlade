import { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg"
import css from "./Header.module.css"
import { IoIosMenu, IoIosClose } from "react-icons/io";



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return(
        <header className={css.container}>
            <img src={logo} alt="logo" />

            {windowWidth <= 1440 ? (
                <>
                    <div onClick={toggleMenu} className={css.burgerIcon}>
                        {isMenuOpen ? '' : <IoIosMenu  className={css.close}/>}
                    </div>
                        <div className={`${css.menu} ${isMenuOpen ? css.open : ''}`}>
                            <div onClick={toggleMenu} className={css.burgerIcon}>
                            {isMenuOpen ? <IoIosClose  className={css.close}/> : ''}
                            </div>
                            <nav>
                                <ul className={css.list}>
                                    <li className={css.item}><a href="#numbers">Цифры</a></li>
                                    <li className={css.item}><a href="#transaction">Сделки онлайн</a></li>
                                    <li className={css.item}><a href="#compania">о компании</a></li>
                                    <li className={css.item}>как начать</li>
                                    <li className={css.item}>тарифы</li>
                                    <li className={css.item}><a href="#tariffs">тарифы</a></li>
                                    <li className={css.item}><a href="#faq">FAQ</a></li>
                                </ul>
                            </nav>
                            <div className={css.containerButton}>
                                <button className={css.register}>регистрация</button>
                                <button className={css.login}>войти</button>
                            </div>
                        </div>
                </>
            ):(
                <>
                    <nav className={css.menuDesk}>
                    <ul className={css.listDesc}>
                        <li className={css.itemDesc}><a href="#numbers">Цифры</a></li>
                        <li className={css.itemDesc}><a href="#transaction">Сделки онлайн</a></li>
                        <li className={css.itemDesc}><a href="#compania">о компании</a></li>
                        <li className={css.itemDesc}>как начать</li>
                        <li className={css.itemDesc}>тарифы</li>
                        <li className={css.itemDesc}><a href="#tariffs">тарифы</a></li>
                        <li className={css.itemDesc}><a href="#faq">FAQ</a></li>
                    </ul>
                    </nav>
                    <div className={css.containerButton}>
                    <button className={css.login}>вход</button>
                    <button className={css.register}>регистрация</button>
                </div>
                </>
            )}
        </header>
    )
}