import Link from "next/link";
import { FaTruck, FaFileContract, FaRecycle, FaIndustry, FaTrashAlt, FaLeaf } from "react-icons/fa";
import styles from "./BusinessServices.module.css";

const services = [
    {
        icon: <FaFileContract />,
        title: "Заключение договора",
        description: "Обязательное заключение договора с региональным оператором для всех юридических лиц и ИП.",
        link: "/documents",
        color: "emerald"
    },
    {
        icon: <FaTruck />,
        title: "Вывоз ТКО",
        description: "Регулярный вывоз твердых коммунальных отходов по согласованному графику.",
        link: "/tariffs",
        color: "blue"
    },
    {
        icon: <FaRecycle />,
        title: "Раздельный сбор",
        description: "Организация раздельного накопления отходов для снижения платы за негативное воздействие.",
        link: "/business",
        color: "green"
    },
    {
        icon: <FaIndustry />,
        title: "Промышленные отходы",
        description: "Вывоз и утилизация отходов производства, не относящихся к ТКО (по отдельной заявке).",
        link: "/contacts",
        color: "amber"
    },
    {
        icon: <FaTrashAlt />,
        title: "Аренда контейнеров",
        description: "Предоставление контейнеров и бункеров различного объема в аренду.",
        link: "/contacts",
        color: "purple"
    },
    {
        icon: <FaLeaf />,
        title: "Экологическое сопровождение",
        description: "Консультации по вопросам экологического законодательства и нормативов.",
        link: "/support",
        color: "teal"
    }
];

export const BusinessServices = () => {
    return (
        <div className={styles.grid}>
            {services.map((service, index) => (
                <Link href={service.link} key={index} className={`${styles.card} ${styles[service.color]}`}>
                    <div className={styles.iconWrapper}>
                        {service.icon}
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{service.title}</h3>
                        <p className={styles.description}>{service.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
