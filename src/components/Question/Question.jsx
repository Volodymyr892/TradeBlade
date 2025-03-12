import { useState } from "react";
import css from "./Question.module.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



export default function Question() {
    const [openIndex, setOpenIndex] = useState(null);


    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return(
        <section id="faq" className={css.container}>
            <h2 className={css.title}>часто задаваемые вопросы</h2>
        
        <div className={css.containerQuestion}>
            <div className={`${openIndex === 0 ? css.containerAcordionOpen : css.containerAcordion }`}>
                <div className={css.containerTitle}>
                    <h3 className={ `${openIndex === 0 ? css.titleAcordeonOpen : css.titleAcordeon }`}>Что такое TradeBlade</h3>
                    <button className={css.buttonAcordeon} onClick={() => handleToggle(0)}>
                    {openIndex === 0 ? <IoIosArrowUp  className={css.Up}/> : <IoIosArrowDown  className={css.down}/>}
                    </button>
                </div>
                {openIndex === 0 && (
                        <p className={css.answer}>
                            Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.
                            <br /><br />
                            Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.
                        </p>
                    )}
            </div>
            <div className={`${openIndex === 1 ? css.containerAcordionOpen : css.containerAcordion }`}>
                <div className={css.containerTitle}>
                    <h3 className={ `${openIndex === 1 ? css.titleAcordeonOpen : css.titleAcordeon }`}>Что TradeBlade предлагает инвесторам</h3>
                    <button className={css.buttonAcordeon} onClick={() => handleToggle(1)}>
                    {openIndex === 1 ? <IoIosArrowUp  className={css.Up}/> : <IoIosArrowDown  className={css.down}/>}
                    </button>
                </div>
                {openIndex === 1 && (
                        <p className={css.answer}>
                            Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.
                            <br /><br />
                            Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.
                        </p>
                    )}
            </div>
            <div className={`${openIndex === 2 ? css.containerAcordionOpen : css.containerAcordion }`}>
                <div className={css.containerTitle}>
                    <h3 className={ `${openIndex === 2 ? css.titleAcordeonOpen : css.titleAcordeon }`}>Должен ли я перевести свои средства на TradeBlade</h3>
                    <button className={css.buttonAcordeon} onClick={() => handleToggle(2)}>
                    {openIndex === 2 ? <IoIosArrowUp  className={css.Up}/> : <IoIosArrowDown  className={css.down}/>}
                    </button>
                </div>
                {openIndex === 2 && (
                        <p className={css.answer}>
                            Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.
                            <br /><br />
                            Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.
                        </p>
                    )}
            </div>
        </div>
        </section>
    )
}