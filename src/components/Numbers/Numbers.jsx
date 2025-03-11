import css from "./Numbers.module.css"
import decor from "../../assets/Rectangle.svg"
import { DiJavascript1 } from "react-icons/di"
export default function Numbers() {
    return(
        <section id="numbers" className={css.container}>
            <img className={css.img} src={decor} alt="decor" />
            <div className={css.containerDesc}>
                <div>
                    <h2 className={css.title}>Цифры</h2>
                    <p className={css.description}>Cентябрь 2022</p>
                </div>
                <ul className={css.list}>
                    <li>
                        <p className={css.name}>Торговой прибыли</p>
                        <p className={css.procent}>2756%</p>
                    </li>
                    <li>
                        <p className={css.name}>фьючерсных 
                        и спотовых сделок</p>
                        <p className={css.procent}>67</p>
                    </li>
                    <li>
                        <p className={css.name}>прибыль
                        подписчиков</p>
                        <p className={css.procent}>375000</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}