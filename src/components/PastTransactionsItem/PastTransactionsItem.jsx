import css from "./PastTransactionsItem.module.css"
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import decor from  "../../assets/decor.svg"

export default function PastTrasactionItem({trading}) {
    return(
        <div className={css.container}>
            <img className={css.img} src={decor} alt="decor" />
            <h3 className={css.title}>{trading.pair}</h3>
            <p className={css.time}>{trading.type} • <span className={css.span}>{trading.timeframe}</span></p>

            <p className={css.income}>Прибыль</p>
            <div className={css.containerProfit}>
                <p className={css.profit}>{trading.profit}</p>
                <LiaLongArrowAltUpSolid  className={css.arrow}/>
            </div>
            <ul className={css.list}>
                <li className={css.itemGoal}>
                    <p>Цель</p>
                    <p>{trading.goal}</p>
                </li>
                <li className={css.itemDate}>
                    <p>Дата входа</p>
                    <p>{trading.entryDate}</p>
                </li>
            </ul>
        </div>
    )
}