import { GridItemData } from "@/types/bentoGrid.types";
import styles from "@/components/home/BentoGrid.module.css";

export const bentoGridItems: GridItemData[] = [
    {
        id: 1,
        title: "Устойчивое развитие",
        description: "Мы внедряем передовые технологии переработки для сохранения природы региона.",
        link: "/about",
        className: styles.colSpan2,
        gradientClass: "ecoGradient",
        colorClass: "greenCard",
        borderColors: "conic-gradient(from 0deg, transparent 0 300deg, #22c55e 360deg)"
    },
    {
        id: 2,
        title: "Услуги для бизнеса",
        description: "Комплексные решения по вывозу ТКО для юридических лиц.",
        link: "/services",
        colorClass: "blueCard",
        borderColors: "conic-gradient(from 0deg, transparent 0 300deg, #3b82f6 360deg)"
    },
    {
        id: 3,
        title: "Новости",
        description: "Последние события и экологические инициативы.",
        link: "/news",
        className: styles.rowSpan2,
        gradientClass: "newsGradient",
        colorClass: "orangeCard",
        borderColors: "conic-gradient(from 0deg, transparent 0 300deg, #f59e0b 360deg)"
    },
    {
        id: 4,
        title: "Личный кабинет",
        description: "Управляйте счетами и услугами онлайн.",
        link: "/profile",
        className: styles.colSpan2,
        colorClass: "pinkCard",
        borderColors: "conic-gradient(from 0deg, transparent 0 300deg, #ec4899 360deg)"
    },
    {
        id: 5,
        title: "Контакты",
        description: "Свяжитесь с нами любым удобным способом.",
        link: "/contacts",
        colorClass: "cyanCard",
        borderColors: "conic-gradient(from 0deg, transparent 0 300deg, #06b6d4 360deg)"
    }
];
