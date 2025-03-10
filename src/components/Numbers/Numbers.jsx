import css from "./Numbers.module.css"
export default function Numbers() {
    return(
        <section className={css.container}>
            <h2 className={css.title}>Цифры</h2>
            <p className={css.description}>Cентябрь 2022</p>
            <ul className={css.list}>
                <li>
                    <p className={css.name}>Торговой</p>
                    <p className={css.name}>прибыли</p>
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
        </section>
    )
}