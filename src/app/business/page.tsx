import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import { BusinessServices } from "@/components/business/BusinessServices/BusinessServices";
import Link from "next/link";


export const metadata = {
    title: "Юридическим лицам | Экологистика КБР",
    description: "Информация для юридических лиц и ИП. Заключение договоров на вывоз ТКО, тарифы, нормативы накопления отходов в Кабардино-Балкарии.",
};


import { BusinessSteps } from "@/components/business/BusinessSteps/BusinessSteps";

export default function BusinessPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Юридическим лицам", item: "/business" },
                ]}
            />
            <SectionTitle title="Юридическим лицам" />

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Обязанность заключения договора</h3>
                <p className={styles.pageText}>
                    В соответствии с Федеральным законом №89-ФЗ «Об отходах производства и потребления», все юридические лица и индивидуальные предприниматели, в результате деятельности которых образуются твердые коммунальные отходы, <strong>обязаны заключить договор</strong> с региональным оператором.
                </p>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '1.5rem' }}>
                    <p style={{ margin: 0, color: '#065f46', fontSize: '1.25rem', fontWeight: 700 }}>
                        Отсутствие договора не освобождает от обязанности оплачивать услуги по вывозу ТКО и может повлечь административную ответственность (штрафы до 250 000 рублей для юридических лиц).
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Как заключить договор</h3>
                <BusinessSteps />
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Наши услуги для бизнеса</h3>
                <BusinessServices />
            </div>

            <div className={styles.combinedSection}>
                <div className={styles.combinedGrid}>
                    {/* Documents Column */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 className={styles.subtitle} style={{ marginBottom: 0 }}>Документы</h3>
                            <Link href="/documents" style={{ color: '#10b981', fontWeight: 600, textDecoration: 'none' }}>
                                Все документы &rarr;
                            </Link>
                        </div>
                        <p className={styles.pageText}>
                            Для заключения договора вам потребуются уставные документы, выписка из ЕГРЮЛ/ЕГРИП и заявка установленного образца.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <a href="/documents" className={styles.link}>Скачать форму заявки на заключение договора</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="/documents" className={styles.link}>Типовой договор на оказание услуг по обращению с ТКО</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="/tariffs" className={styles.link}>Действующие тарифы и нормативы накопления</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacts Column */}
                    <div>
                        <div className={styles.contactsCard}>
                            <h3 className={styles.subtitle} style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Контакты для юрлиц</h3>
                            <div className={styles.pageText} style={{ marginBottom: 0 }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.25rem' }}>Абонентский отдел:</strong>
                                    <span style={{ color: 'var(--foreground)', opacity: 0.9 }}>г. Нальчик, ул. Ленина, 57</span>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.25rem' }}>Телефон:</strong>
                                    <a href="tel:+78000000000" style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: 600, textDecoration: 'none' }}>8 (800) 000-00-00</a>
                                </div>

                                <div>
                                    <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.25rem' }}>Email:</strong>
                                    <a href="mailto:info@ecologistika.com" style={{ color: '#10b981', textDecoration: 'none' }}>info@ecologistika.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

