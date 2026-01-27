import styles from "../Uslugi/uslugi.module.css";
import Car from "../Uslugi/img/car.svg";
import Notepad from "../Uslugi/img/bak.svg";
import Trashcar from "../Uslugi/img/massage.svg";
import Button from "../Button/index";

const cards = [
    {
        href: "/request-tko",
        src: Car,
        text: "Заказать вывоз ТКО, КГО, cтроительного мусора",
        id: "car",
        button: {
            text: "Заказать вывоз"
        }
    },
    {
        href: "/report-tko",
        src: Notepad,
        text: "Сообщить о невывозе отходов",
        button: {
            text: "Сообщить о невывозе"
        }
    },
    {
        href: "/support",
        src: Trashcar,
        text: "",
        button: {
            text: "Задать вопрос"
        }
    },
];

export default function Uslugi() {
    return (
        <div className={styles.uslugi_container}>
            <h1 className={styles.uslugi_container_title}>Услуги для <span className={styles.span}> физических лиц</span></h1>
            <div className={styles.uslugi_container__card}>
                {cards.map((card) => (
                    <div className={styles.uslugi_card}>
                        <img src={card.src} className={styles.uslugi_img}></img>
                        <div className={styles.uslugi_container__text}>
                            <p className={styles.uslugi__text}>
                            {card.text}
                             </p>
                             <div className={styles.container_button}>
                            <Button text={card.button.text} href={card.href}></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
