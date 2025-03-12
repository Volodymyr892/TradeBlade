import css from "./Numbers.module.css"
import decormob from "../../assets/Rectangle.svg"
import decorDesc from "../../assets/RectangleDesc.svg"
import { useEffect, useState } from "react";


export default function Numbers() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);
    
        useEffect(() => {
            const handleResize = () => {
                setIsLargeScreen(window.innerWidth > 1440);
            };
    
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        const decor = isLargeScreen ? decorDesc : decormob 
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