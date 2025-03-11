import css from "./Tariffs.module.css"
import Select from "react-select";
import { FaCheck } from "react-icons/fa6";
import { customStylesStandart, customStylesVip } from "../../constans/styles";
  
  const options = [
    { value: "6", label: "6 месяцев" },
    { value: "12", label: "12 месяцев" },
    { value: "24", label: "24 месяца" },
  ];
  
export default function Tariffs (){
    return(
        <section id="tariffs" className={css.container}>
        <h2 className={css.title}>Тарифы</h2>
        <div className={css.containerButton}>
            <p  className={css.spot}>СПОТ</p>
            <p className={css.futures}>фьючерс</p>
        </div>
            <div className={css.containerTraffic}>
                <div className={css.containerStandart}>
                    <h3 className={css.titleStandart}> STANDART</h3>
                    <ul className={css.list}>
                        <li className={css.item}>
                            <div className={css.itemContainer}>
                                <div><FaCheck className={css.img}/></div>
                                <p className={css.descriptionStandart} >Ручной трейдинг</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                        <div className={css.itemContainer}>
                            <div><FaCheck className={css.img}/></div>
                            <p className={css.descriptionStandart}>Автоматическое или полуавтоматическое копирование сделок</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                        <div className={css.itemContainer}>
                            <FaCheck className={css.img}/>
                            <p className={css.descriptionStandart}>Личный кабинет со статистикой</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                            <div className={css.itemContainer}>
                            <div><FaCheck className={css.img}/></div>
                            <p className={css.descriptionStandart}>Среднесрочные сделки с уровнями набора портфеля</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                    </ul>
                    <div className={css.containerselect}>
                        <p className={css.price}>$234</p>
                        <p className={css.discount}>-35%</p>
                        <Select
                            options={options}
                            defaultValue={options[1]}
                            styles={customStylesStandart}
                            isSearchable={false}
                        />
                    </div>
                    <button className={css.button}>
                        <p className={css.try}>Попробовать</p>
                        <p className={css.free}>5 дней бесплатно</p>
                    </button>
                </div>
                
                <div className={css.containerVip}>
                <h3 className={css.titleStandart}> VIP</h3>
                    <ul className={css.listVip}>
                        <li className={css.item}>
                            <div className={css.itemContainer}>
                                <div><FaCheck className={css.img}/></div>
                                <p className={css.descriptionStandart} >Ручной трейдинг</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                        <div className={css.itemContainer}>
                            <div><FaCheck className={css.img}/></div>
                            <p className={css.descriptionStandart}>Автоматическое или полуавтоматическое копирование сделок</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                        <div className={css.itemContainer}>
                            <FaCheck className={css.img}/>
                            <p className={css.descriptionStandart}>Личный кабинет со статистикой</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                            <div className={css.itemContainer}>
                            <div><FaCheck className={css.img}/></div>
                            <p className={css.descriptionStandart}>Краткосрочные, среднесрочные и инвест сделки</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                            <div className={css.itemContainer}>
                            <div><FaCheck className={css.img}/></div>
                            <p className={css.descriptionStandart}>Доступ в Vip чат с командой</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                        <li className={css.item}>
                            <div className={css.itemContainer}>
                            <div><FaCheck className={css.img}/></div>
                            <p className={css.descriptionStandart}>Наш авторский курс по трейдингу</p>
                            </div>
                            <hr className={css.line}/>
                        </li>
                    </ul>
                    <div className={css.containerselect}>
                        <p className={css.price}>$585</p>
                        <p className={css.discount}>-35%</p>
                        <Select
                            options={options}
                            defaultValue={options[1]}
                            styles={customStylesVip}
                            isSearchable={false}
                        />
                    </div>
    
                    <button className={css.button}>
                        <p className={css.try}>Попробовать</p>
                        <p className={css.free}>5 дней бесплатно</p>
                    </button>
                </div>
            </div>
        </section>
    )
}