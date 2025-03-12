import PastTrasactionItem from "../PastTransactionsItem/PastTransactionsItem";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import css from "./PastTransactionsList.module.css"

const tradingsData = [
    { id: 1, pair: "NEAR/USDT", type: "SPOT", timeframe: "1 мин. назад", profit: "58.6206%", goal: 4, entryDate: "10/06/2022" },
    { id: 2, pair: "BTC/USDT", type: "SPOT", timeframe: "3 мин. назад", profit: "12.3045%", goal: 2, entryDate: "12/08/2022" },
    { id: 3, pair: "ETH/USDT", type: "SPOT", timeframe: "1 мин. назад", profit: "24.7856%", goal: 3, entryDate: "05/09/2023" },
    { id: 4, pair: "SOL/USDT", type: "SPOT", timeframe: "3 мин. назад", profit: "40.5623%", goal: 5, entryDate: "22/02/2023" },
    { id: 5, pair: "ADA/USDT", type: "SPOT", timeframe: "1 мин. назад", profit: "18.9321%", goal: 1, entryDate: "18/04/2022" },
    { id: 6, pair: "XRP/USDT", type: "SPOT", timeframe: "4 мин. назад", profit: "35.7890%", goal: 3, entryDate: "07/07/2022" },
    { id: 7, pair: "MATIC/USDT", type: "SPOT", timeframe: "5 мин. назад", profit: "20.4512%", goal: 2, entryDate: "15/11/2023" },
    { id: 8, pair: "DOT/USDT", type: "SPOT", timeframe: "3 мин. назад", profit: "47.9865%", goal: 4, entryDate: "10/01/2023" },
    { id: 9, pair: "AVAX/USDT", type: "SPOT", timeframe: "1 мин. назад", profit: "33.5721%", goal: 5, entryDate: "29/06/2023" },
    { id: 10, pair: "LTC/USDT", type: "SPOT", timeframe: "1 мин. назад", profit: "27.1403%", goal: 3, entryDate: "14/09/2022" }
];


export default function PastTransactionsList() {
    return(
        <section id="transaction" className={css.container}>
            <h2 className={css.title}>Прошедшие сделки</h2>
            <p className={css.desc}>• Онлайн</p>

            <div className={css.scrollContainer}>
                <ul className={css.scrollMenu}> 
                    {tradingsData.map((trading)=> (
                        <li key={trading.id}> 
                            <PastTrasactionItem trading={trading} />
                        </li> 
                    ))}
                </ul> 
            </div>
        </section>
    )
}