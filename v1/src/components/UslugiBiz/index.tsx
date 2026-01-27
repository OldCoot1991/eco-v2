import styles from "../UslugiBiz/uslugi.module.css";
import Car from "../Uslugi/img/car.svg";
import Notepad from "../Uslugi/img/bak.svg";
import Trashcar from "../Uslugi/img/massage.svg";
import Button from "../Button/index";


const cards = [
    {
        href: "/request-tko-jur",
        src: Car,
        text: "Заказать вывоз ТКО, КГО, cтроительного мусора",
        id: "car",
        button: {
            text: "Заказать вывоз"
        }
    },
    {
        href: "/jur/contract",
        src: Notepad,
        text: "Заключить договор с юридическим лицом",
        button: {
            text: "Заключить договор"
        }
    },
    {
        href: "/report-tko-jur",
        src: Trashcar,
        text: "Сообщить о невывозе отходов",
        button: {
            text: "Сообщить о невывозе"
        }
    },
    {
        href: "/support-jur",
        src: Trashcar,
        text: "Задать вопрос в техническую поддержку",
        button: {
            text: "Задать вопрос"
        }
    },
];

export default function UslugiBiz() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heade_text}>Услуги для <span className={styles.span}> юридических лиц</span></h1>
            <div className={styles.dis_row}>
                {cards.map((card) => (
                        <div className={styles.card}>
                            <div className={styles.container_img} id={card.id}>
                                <img src={card.src} className={styles.img}></img>
                            </div>
                            <div className={styles.container_link}>
                                <p className={styles.paragraf}>
                                    {card.text}
                                </p>
                            </div>
                            <div className={styles.container_btn}>
                            <Button text={card.button.text} href={card.href}></Button>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
}
