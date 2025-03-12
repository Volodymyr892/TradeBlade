import css from "./Company.module.css"
import decormob from "../../assets/Rectangle.svg"
import decorDesc from "../../assets/RectangleDesc.svg"
import { useEffect, useState } from "react";


export default function Company() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1440);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const decor = isLargeScreen ? decorDesc : decormob;
    return(
        <section id="compania" className={css.container}> 
            <img className={css.img} src={decor} alt="decor" />
            <div className={css.containerDesc}>
                <div>
                    <h2 className={css.title}> О компании</h2>
                    <p className={css.description}><span className={css.span}>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.</span>
                    <span>Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</span>
                    </p>
                </div>
                <div className={css.containerForm}>
                    <p className={css.titleForm}>Попробуйте сейчас и получите
                    5 дней бесплатного пользования</p>
                    { isLargeScreen ? (
                        <label className={css.labelCompany} htmlFor="">
                            <input className={css.inputCompany} type="text"  placeholder="Ваш e–mail"/>
                            <button className={css.button}>попробовать</button>
                        </label>
                    ):(
                    <>
                        <label className={css.labelCompany} htmlFor="">
                            <input className={css.inputCompany} type="text"  placeholder="Ваш e–mail"/>
                        </label>
                        <button className={css.button}>попробовать</button>
                    </>
                )
                }
                </div>
            </div>
        </section>
    )
}