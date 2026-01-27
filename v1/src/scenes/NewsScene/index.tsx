import styles from "./newsscene.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useParams } from "react-router";
import Platform from "../../assets/images/platform.jpg";

// Новости

let months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
];

const baseUrl = "https://ecologistika.com/api";

function NewsScene() {
    return (
        // * Оборачиваем в Route, чтобы синхронизировать состояние с параметрами в адресной строке
        <Switch>
            <Route
                path="/news/post/:postid" // * Здесь можно перейти к конкретной новости
            >
                <FullPost />
            </Route>
            <Route
                path="/news/:page?/" // * Здесь можно перейти к конкретной странице
            >
                <News />
            </Route>
        </Switch>
    );
}

function News() {
    const params: any = useParams();
    const history = useHistory();

    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);
    const page = params.page || 1;
    const limit = 10;
    useEffect(() => {
        setLoading(true);
        axios
            .get(
                `${baseUrl}/items/news?fields[]=cover&fields[]=description&fields[]=status&fields[]=title&fields[]=id&fields[]=date_created&sort[]=-date_created&page=${page}&limit=${limit}&meta=total_count`
            )
            .then((res) => {
                setPosts(res.data.data);
                setLoading(false);
                setCount(res.data.meta.total_count);
            });
    }, [params]);

    const handleClick = (postid: string) => {
        history.push(`/news/post/${postid}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Новости</h1>
            <div className={styles.news}>
                <Pagination limit={limit} page={page} count={count} />
                {loading ? (
                    <div className={styles.loader}>Идет загрузка...</div>
                ) : (
                    <>
                        {posts.map((post: any) => {
                            let text = post.title;
                            let date = new Date(post.date_created);
                            return (
                                <div
                                    className={styles.news_card}
                                    key={post.postid}
                                >
                                    <img
                                        className={styles.img}
                                        src={`${baseUrl}/assets/${post.cover}`}
                                        alt="Изображение новости"
                                    />
                                    <div
                                        className={styles.body}
                                        onClick={() => handleClick(post.id)}
                                    >
                                        <p className={styles.text}>{text}</p>
                                        <div>{post.description}</div>
                                    </div>
                                </div>
                            );
                        })}
                        <Pagination
                            limit={limit}
                            page={page}
                            count={count}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

function FullPost() {
    const params: any = useParams();
    const [post, setPost] = useState<any>();
    let date = new Date(post?.date_created);
    useEffect(() => {
        axios
            .get(`${baseUrl}/items/news/${params.postid}`)
            .then((res) => {
                setPost(res.data.data);
            });
    }, []);
    return (
        <div className={styles.container}>
            <img
                className={styles.full_image}
                src={`${baseUrl}/assets/${post?.cover}`}
                alt=""
            />
            <div
                className={styles.full_text}
                dangerouslySetInnerHTML={{ __html: post?.article }}
            ></div>
        </div>
    );
}

function Pagination({
    limit,
    page,
    count,
}: {
    limit: number;
    page: number;
    count: number;
}) {
    let pages = Array(Math.floor(count / limit)).fill(1); // кол-во страниц

    const getRange = () => {
        let start = Math.floor((~~page - 1) / pages.length) * pages.length;
        return new Array(pages.length).fill(1).map((_, idx) => start + idx + 1);
    };

    const history = useHistory();
    const handlePageChange = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        page: number
    ) => {
        e.preventDefault();
        history.push(`/news/${page}`);
    };

    const handlePrev = () => page != 1 && history.push(`/news/${~~page - 1}`);
    const handleNext = () =>
        page != pages.length && history.push(`/news/${~~page + 1}`);

    return (
        pages.length > 1 ?
        <div className={styles.pagination}>
            <ul className={styles.pages}>
                <a
                    onClick={handlePrev}
                    className={`${styles.prev} ${styles.page} ${
                        page == 1 ? styles.disabled : ""
                    }`}
                >
                    {"<"}
                </a>
                {getRange().map((p: number, i: number) => {
                    let active = p == page;
                    return (
                        <a
                            key={i}
                            onClick={(e) => handlePageChange(e, p)}
                            className={`${styles.page} ${
                                active && styles.active
                            }`}
                        >
                            {p}
                        </a>
                    );
                })}
                <a
                    onClick={handleNext}
                    className={`${styles.prev} ${styles.page} ${
                        page == pages.length && styles.disabled
                    }`}
                >
                    {">"}
                </a>
            </ul>
        </div>
        : null
    );
}

export default NewsScene;
export { months };
