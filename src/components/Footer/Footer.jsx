import css from "./Footer.module.css"
import logo from "../../assets/Logo.svg"


export default function Footer() {
    return(
        <footer className={css.container}>
            <div className={css.containerDesc}>
                <div className={css.containerNav}>
                    <h2 className={css.title}>Быстрая      
                    навигация</h2>
                    <nav>
                        <ul className={css.list}>
                            <li className={css.item}><a href="#numbers">Цифры</a></li>
                            <li className={css.item}><a href="#transaction">Сделки онлайн</a></li>
                            <li className={css.item}><a href="#compania">о компании</a></li>
                            <li className={css.item}>tradeblad это</li>
                            <li className={css.item}>как начать</li>
                            <li className={css.item}><a href="#tariffs">тарифы</a></li>
                            <li className={css.item}><a href="#faq">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
                    <hr className={css.line}/>
                <div className={css.containerLogo}>
                    <img className={css.img} src={logo} alt="logo" />
                    <p className={css.copyright}>© 2022 TradeBlade. All rights reserved</p>
                </div>
            </div>
            <div className={css.lineBotom}></div>
        </footer>
    )
}