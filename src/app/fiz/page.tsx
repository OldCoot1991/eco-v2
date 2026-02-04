import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import styles from "../page.module.css";
import BreadcrumbsLd from "@/shared/seo/BreadcrumbsLd";


export const metadata = {
    title: "Частным лицам | Экологистика КБР",
    description: "Информация для физических лиц. Оплата услуг, график вывоза мусора, заключение договоров и тарифы для населения Кабардино-Балкарии.",
};


export default function FizPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Частным лицам", item: "/fiz" },
                ]}
            />
            <SectionTitle title="Физическим лицам" />

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Оплата услуг</h3>
                <p className={styles.pageText}>
                    Оплата услуг по вывозу ТКО для физических лиц является обязательной (Жилищный кодекс РФ). Начисления производятся ежемесячно исходя из количества проживающих в жилом помещении.
                </p>
                <p className={styles.pageText}>
                    Способы оплаты без комиссии или с минимальной комиссией:
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Через мобильное приложение <strong>Сбербанк Онлайн</strong> (QR-код на квитанции или поиск по ИНН/названию).</li>
                    <li className={styles.listItem}>В отделениях <strong>Почты России</strong>.</li>
                    <li className={styles.listItem}>Через личный кабинет на сайте (в разработке).</li>
                    <li className={styles.listItem}>В кассах расчетного центра ООО «Экологистика».</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Тарифы</h3>
                <p className={styles.pageText}>
                    Тарифы на услугу регионального оператора утверждаются Министерством энергетики, тарифов и жилищного надзора КБР. Республика разделена на тарифные зоны, стоимость может отличаться в зависимости от зоны (Нальчик, районные центры, сельские поселения).
                </p>
                <p className={styles.pageText}>
                    Актуальные тарифы на 2026 год установлены Приказом №214. Для уточнения вашей тарифной зоны и размера платы обратитесь в абонентский отдел или по телефону горячей линии.
                </p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Льготы</h3>
                <p className={styles.pageText}>
                    Услуга по обращению с ТКО относится к коммунальным услугам, поэтому на неё распространяются все федеральные и региональные льготы (ветераны труда, инвалиды, многодетные семьи). Компенсация расходов оформляется через органы социальной защиты населения.
                </p>
            </div>
        </div>
    );
}
