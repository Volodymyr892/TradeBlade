import css from "./Instantly.module.css"
import line from "../../assets/line.svg"


export default function Instantly () {
    return(
        <section className={css.container}>
            <div className={css.card}>
                <img className={css.imgTop} src={line} alt="line" />
                <img className={css.imgBottom} src={line} alt="line" />
                <ul className={css.shadowCard} >
                    <li className={css.pair}>ETH/USDT</li>
                    <li className={css.position}>Short</li>
                    <li className={css.procent}>+141%</li>
                </ul>
                <ul className={css.mainCard} >
                    <li className={css.pairQ}>ETH/USDT</li>
                    <li className={css.positionQ}>Short</li>
                    <li className={css.procentQ}>+116%</li>
                </ul>
            </div>
            <div className={css.containerTitleForm}>
                <div className={css.titleContainer}>
                    <h1 className={css.title}>моментально Копируй сделки профи трейдеров</h1>
                    <p className={css.description}>Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.</p>
                </div>
                <div>
                <label className={css.label}>
                    <input className={css.input} type="text" placeholder="Ваш e–mail" />
                    <button className={css.button}>начать</button>
                </label>
                <p className={css.free}>5 дней бесплатного пользования</p>
                </div>
            </div>
        </section>
    )
}