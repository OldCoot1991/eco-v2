import styles from "../WasteCard/waste.module.css";
import wastecard1 from "../../assets/wastecard1.svg";
import wastecard2 from "../../assets/wastecard2.svg";
import Button from "../Button/index";

const wastes = [
    {
        title: "Мониторинг вывоза мусора",
        href: "/monitoring",
        scr: wastecard1,
        text: "Найдите контейнер для твердых коммунальных отходов или бункер для крупногабаритных отходов рядом с вашим домом на интерактивной карте.",
        button: {
            text: "Найти контейнер",
        },
    },
    {
        title: "Как правильно разделять отходы?",
        href: "/guide/separate",
        scr: wastecard2,
        text: "Чтобы сортировка собственного мусора приносила пользу обществу и экологии, нужно узнать, какие бытовые отходы бывают, как правильно определять их виды и как разделять. Изучите небольшую инструкцию и сортируйте отходы правильно.",
        button: {
            text: "Смотреть",
        },
    },
];

const WasteCard = () => {
    return (
        <div className={styles.waste_container}>
            <div className={styles.waste_container__card}>
                {wastes.map((waste) => (
                    <div className={styles.waste_card}>
                        <div className={styles.waste_card_container}>
                            <h2 className={styles.waste_title}>
                                {waste.title}
                            </h2>
                            <img
                                src={waste.scr}
                                alt=""
                                className={styles.waste_img}
                            />
                            <p className={styles.waste_text}>{waste.text}</p>
                        </div>
                        <div className={styles.waste_container_button}>
                            <div className={styles.waste_button}>
                                <Button
                                    href={waste.href}
                                    text={waste.button.text}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default WasteCard;
