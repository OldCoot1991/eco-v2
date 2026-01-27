import Link from "next/link";
import { FaArrowRight, FaRecycle } from "react-icons/fa";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Background decoration */}
            <div className={styles.bgDecor}>
                <div className={styles.bgCircle1} />
                <div className={styles.bgCircle2} />
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <FaRecycle />
                        <span>Региональный оператор КБР</span>
                    </div>

                    <h1 className={styles.heading}>
                        Чистота республики <br />
                        <span className={styles.headingGradient}>
                            в наших общих руках
                        </span>
                    </h1>

                    <p className={styles.description}>
                        Внеси свой вклад в сохранение экологии региона. Мы делаем процесс обращения с отходами прозрачным и доступным для каждого.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="/request-tko" className={styles.primaryButton}>
                            Заказать вывоз
                            <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                        <Link href="/report-tko" className={styles.secondaryButton}>
                            Сообщить о проблеме
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
