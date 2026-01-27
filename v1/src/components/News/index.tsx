import { useEffect, useState } from "react";
import styles from "../News/news.module.css";
import Button from "../Button/index";
import axios from "axios";
import { months } from "../../scenes/NewsScene";
import { useHistory } from "react-router";

const baseUrl = "https://ecologistika.com/api";

const News = () => {
    const [news, setNews] = useState([]);
    const history = useHistory();
    useEffect(() => {
        axios
            .get(`${baseUrl}/items/news?sort=-date_created`)
            .then((res) => {
                setNews(res.data.data.splice(0, 5)); // strip down to 6 posts
            })
            .catch((err) => console.log(err));
    }, []);

    const handleClick = () => history.push("/news");
    const handlePostClick = (postid: string) => {
        history.push(`/news/post/${postid}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.top_nav}>
                <h1 className={styles.top_text}>Новостной блок</h1>
            </div>
            <div className={styles.wrapper_news}>
                {news.map((card: any) => {
                    let text = card.description;
                    return (
                        <div className={styles.card_wrapper}>
                            <a
                                onClick={() => handlePostClick(card.id)}
                                className={styles.news}
                            >
                                <img
                                    src={`${baseUrl}/assets/${card.cover}`}
                                    className={styles.news_img}
                                    alt=""
                                />
                                <div className={styles.container_text}>
                                    <p className={styles.text_news}>{text}</p>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className={styles.container_button}>
                <Button click={handleClick} text="Все новости" />
            </div>
        </div>
    );
};

export default News;
