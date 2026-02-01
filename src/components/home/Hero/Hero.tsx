import Link from "next/link";
import { FaRecycle } from "react-icons/fa";
import styles from "./Hero.module.css";
import { heroButtons, bgCircles } from "./heroData";

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.bgDecor}>
                {bgCircles.map((circle) => (
                    <div key={circle} className={styles[circle]} />
                ))}
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
                        {heroButtons.map((button) => {
                            const Icon = button.icon;
                            const buttonClass = button.variant === 'primary'
                                ? styles.primaryButton
                                : styles.secondaryButton;

                            return (
                                <Link key={button.href} href={button.href} className={buttonClass}>
                                    {button.text}
                                    {Icon && <Icon className={styles.arrowIcon} />}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
