import Link from "next/link";
import { FaTruck, FaExclamationTriangle, FaQuestionCircle } from "react-icons/fa";
import styles from "./Services.module.css";

const services = [
    {
        icon: FaTruck,
        title: "Вывоз отходов",
        description: "Заказать вывоз ТКО, КГО и строительного мусора",
        href: "/request-tko",
        iconClass: styles.iconEmerald,
        buttonText: "Заказать вывоз"
    },
    {
        icon: FaExclamationTriangle,
        title: "Сообщить о проблеме",
        description: "Сообщить о невывозе отходов или нарушении графика",
        href: "/report-tko",
        iconClass: styles.iconAmber,
        buttonText: "Подать жалобу"
    },
    {
        icon: FaQuestionCircle,
        title: "Поддержка",
        description: "Задать вопрос или получить консультацию специалиста",
        href: "/support",
        iconClass: styles.iconBlue,
        buttonText: "Задать вопрос"
    }
];

export const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Услуги для <span className={styles.headingAccent}>физических лиц</span>
                    </h2>
                    <p className={styles.description}>
                        Выберите необходимую услугу для быстрого решения вашего вопроса
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={`${styles.iconWrapper} ${service.iconClass}`}>
                                <service.icon className={styles.icon} />
                            </div>

                            <h3 className={styles.cardTitle}>
                                {service.title}
                            </h3>

                            <p className={styles.cardDescription}>
                                {service.description}
                            </p>

                            <Link href={service.href} className={styles.cardLink}>
                                {service.buttonText}
                                <svg
                                    className={styles.linkIcon}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
