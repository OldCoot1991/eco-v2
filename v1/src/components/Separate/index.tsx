import React from "react";
import styles from "../Separate/separate.module.css";
import { images } from "./separate";
import { cards, Card as Separate } from "./separate";
import EcoMobileAppBanner from "../EcoMobileAppBanner";

interface Cards {
    openedKey: number;
    displayClass: string;
    card: Separate;
    activeTabId: number;
}

class Card extends React.Component<any, Cards> {
    constructor(props: any) {
        super(props);
        this.state = {
            openedKey: 0,
            displayClass: styles.main_content,
            card: cards[0],
            activeTabId: 0,
        };
    }

    render() {
        const { card, activeTabId } = this.state;
        return (
            <section className={styles.container}>
                    <div className={styles.container_boss}>
                        <div className={styles.container_image}>
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className={
                                        activeTabId == i
                                            ? styles.img_active
                                            : styles.card_img
                                    }
                                >
                                    <img
                                        src={img.image}
                                        alt=""
                                        className={styles.img}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <main className={styles.container_main}>
                        <nav className={styles.nav}>
                            <ul className={styles.list}>
                                <li className={styles.links}>
                                    <button
                                        className={styles.link_top}
                                        onClick={() => {
                                            this.setState({
                                                card: cards[0],
                                                activeTabId: 0,
                                            });
                                        }}
                                    >
                                        Пластик
                                    </button>
                                    <ul
                                        className={
                                            activeTabId == 0
                                                ? styles.ul_link_active
                                                : styles.ul_link
                                        }
                                    >
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik1"
                                                className={styles.non_link}
                                            >
                                                Принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik2"
                                                className={styles.non_link}
                                            >
                                                Не принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik3"
                                                className={styles.non_link}
                                            >
                                                Как подготовить тару
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.links}>
                                    <button
                                        className={styles.link_top}
                                        onClick={() => {
                                            this.setState({
                                                card: cards[1],
                                                activeTabId: 1,
                                            });
                                        }}
                                    >
                                        Стекло
                                    </button>
                                    <ul
                                        className={
                                            activeTabId == 1
                                                ? styles.ul_link_active
                                                : styles.ul_link
                                        }
                                    >
                                        <li className={styles.link}>
                                            <a
                                                className={styles.non_link}
                                                href="#plastik4"
                                            >
                                                Принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                className={styles.non_link}
                                                href="#plastik5"
                                            >
                                                Не принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                className={styles.non_link}
                                                href="#plastik6"
                                            >
                                                Как подготовить тару
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.links}>
                                    <button
                                        className={styles.link_top}
                                        onClick={() => {
                                            this.setState({
                                                card: cards[2],
                                                activeTabId: 2,
                                            });
                                        }}
                                    >
                                        Бумага
                                    </button>
                                    <ul
                                        className={
                                            activeTabId == 2
                                                ? styles.ul_link_active
                                                : styles.ul_link
                                        }
                                    >
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik7"
                                                className={styles.non_link}
                                            >
                                                Принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik8"
                                                className={styles.non_link}
                                            >
                                                Не принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik9"
                                                className={styles.non_link}
                                            >
                                                Как подготовить тару
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.links}>
                                    <button
                                        className={styles.link_top}
                                        onClick={() => {
                                            this.setState({
                                                card: cards[3],
                                                activeTabId: 3,
                                            });
                                        }}
                                    >
                                        Металл
                                    </button>
                                    <ul
                                        className={
                                            activeTabId == 3
                                                ? styles.ul_link_active
                                                : styles.ul_link
                                        }
                                    >
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik10"
                                                className={styles.non_link}
                                            >
                                                Принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik11"
                                                className={styles.non_link}
                                            >
                                                Не принимаем в переработку
                                            </a>
                                        </li>
                                        <li className={styles.link}>
                                            <a
                                                href="#plastik12"
                                                className={styles.non_link}
                                            >
                                                Как подготовить тару
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className={styles.main_content}>
                                <div className={styles.content_header}>
                                    <div
                                        className={styles.content_zagolovok}
                                        id={card.id}
                                    >
                                        <img
                                            className={styles.icon_img}
                                            src={card.image}
                                        ></img>
                                        <div>
                                            <h1 className={styles.zagolovok}>
                                                {card.zagolovok}
                                            </h1>
                                            <p
                                                className={
                                                    styles.content_paragraph
                                                }
                                            >
                                                {card.subtext}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.content_table}>
                                    <h1
                                        className={styles.sub_zagolovok}
                                        id={card.id2}
                                    >
                                        {card.tablezagolovok}
                                    </h1>
                                    <img
                                        className={styles.table_icon}
                                        src={card.icon}
                                    ></img>
                                </div>
                                <div className={styles.content_table}>
                                    {card.table()}
                                </div>

                                <div className={styles.content_table}>
                                    <h1 className={styles.sub_zagolovok}>
                                        {card.subtitlle}
                                    </h1>
                                    <img
                                        className={styles.table_icon}
                                        src={card.icons2}
                                    ></img>
                                </div>
                                <div className={styles.content_table_props}>
                                    {card.subtablee()}
                                </div>
                                <div className={styles.content_table_bottom}>
                                    <h1
                                        className={styles.zagolovok}
                                        id={card.id3}
                                    >
                                        {card.subzagolok}
                                    </h1>
                                    <div>{card.wrapperimage()}</div>
                                </div>
                            </div>
                        </nav>
                    </main>
                <EcoMobileAppBanner />
            </section>
        );
    }
}

export default Card;
