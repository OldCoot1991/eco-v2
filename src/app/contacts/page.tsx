import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";

export const metadata = {
    title: "Контакты | Экологистика КБР",
    description: "Адрес, телефоны и режим работы регионального оператора Экологистика в Нальчике и КБР. Абонентский отдел и горячая линия.",
};

export default function ContactsPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Контакты", item: "/contacts" },
                ]}
            />
            <SectionTitle title="Контакты" />

            <div className={styles.section}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className={styles.subtitle}>Центральный офис</h3>
                        <p className={styles.pageText}>
                            <strong>Адрес:</strong> 360051, Кабардино-Балкарская Республика, г. Нальчик, ул. Пушкина, д. 33 "А" (также ул. Кешокова 72), оф. 335.
                            <br />
                            (Дополнительные офисы: пр-т Кулиева, 2б; ул. Мальбахова 4)
                        </p>

                        <h3 className={styles.subtitle}>Связь</h3>
                        <p className={styles.pageText}>
                            <strong>Горячая линия (физ. лица):</strong> <a href="tel:+78662229110" style={{ color: 'var(--primary)' }}>+7 (8662) 22-91-10</a><br />
                            <strong>Единый номер:</strong> <a href="tel:+78002225707" style={{ color: 'var(--primary)' }}>+7 (800) 222-57-07</a><br />
                            <strong>WhatsApp (текст):</strong> +7 (967) 411-06-20<br />
                            <strong>Email:</strong> <a href="mailto:info@ecologistika.com" style={{ color: 'var(--primary)' }}>info@ecologistika.com</a>
                        </p>
                    </div>

                    <div>
                        <h3 className={styles.subtitle}>Режим работы</h3>
                        <p className={styles.pageText}>
                            <strong>Абонентский отдел:</strong><br />
                            Понедельник - Пятница: 08:00 - 18:00<br />
                            Суббота: 09:00 - 16:00<br />
                            Воскресенье: Выходной
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Карта</h3>
                <div style={{ width: '100%', height: '400px', background: '#e5e7eb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Placeholder for Map - can be replaced with Yandex Map iframe later */}
                    <p style={{ color: '#6b7280' }}>Яндекс.Карты (г. Нальчик, ул. Пушкина 33а)</p>
                </div>
            </div>
        </div>
    );
}
