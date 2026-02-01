import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "../../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import { BusinessSteps } from "@/components/business/BusinessSteps/BusinessSteps";
import { FaFileDownload, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ContractModalTrigger } from "@/components/business/ContractModalTrigger/ContractModalTrigger";

// Server component metadata logic works here
export const metadata = {
    title: "Договор на вывоз ТКО | Экологистика КБР",
    description: "Заключение договора на вывоз твердых коммунальных отходов для юридических лиц и индивидуальных предпринимателей. Необходимые документы, порядок заключения, скачать бланк договора.",
};

export default function BusinessContractPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Юридическим лицам", item: "/business" },
                    { name: "Договор", item: "/business/contract" },
                ]}
            />
            <SectionTitle title="Договор на оказание услуг" />

            {/* Legal Basis Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>Обязательность заключения договора</h3>
                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                    <p className={styles.pageText} style={{ marginBottom: '1.5rem' }}>
                        В соответствии с Федеральным законом от 24.06.1998 г. № 89-ФЗ «Об отходах производства и потребления», собственники твердых коммунальных отходов (ТКО) обязаны заключить договор на оказание услуг по обращению с ТКО с региональным оператором, в зоне деятельности которого образуются отходы и находятся места их накопления.
                    </p>
                    <p className={styles.pageText} style={{ marginBottom: 0 }}>
                        <strong>Региональный оператор ООО «Экологистика»</strong> осуществляет деятельность по обращению с ТКО на всей территории Кабардино-Балкарской Республики.
                    </p>
                </div>
            </div>

            {/* Contract Form Trigger */}
            <div className={styles.section} id="form">
                <ContractModalTrigger />
            </div>

            {/* Required Documents Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>Необходимые документы</h3>
                <div className={styles.combinedGrid}>
                    {/* For Legal Entities */}
                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>Для юридических лиц</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Копия Устава (первая, последняя страницы, полномочия руководителя)",
                                "Копия Свидетельства о государственной регистрации (ОГРН)",
                                "Копия Свидетельства о постановке на налоговый учет (ИНН/КПП)",
                                "Копия документа, подтверждающего полномочия руководителя (протокол/решение, приказ)",
                                "Карточка предприятия (банковские реквизиты, юридический и фактический адрес, контакты)",
                                "Документы на помещение (свидетельство о собственности или договор аренды)"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--foreground)' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Entrepreneurs */}
                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>Для индивидуальных предпринимателей</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Копия Свидетельства о государственной регистрации физического лица в качестве ИП (ОГРНИП)",
                                "Копия Свидетельства о постановке на налоговый учет (ИНН)",
                                "Копия паспорта (разворот с фото и прописка)",
                                "Банковские реквизиты (карточка)",
                                "Документы на помещение (свидетельство о собственности или договор аренды)"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--foreground)' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Same Steps */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>Как заключить договор</h3>
                <BusinessSteps />
            </div>

            {/* Downloads Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>Скачать документы</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <div style={{
                        background: 'var(--card-bg)',
                        padding: '1.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '3rem', height: '3rem',
                                background: 'rgba(5, 150, 105, 0.1)',
                                borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--primary)', fontSize: '1.5rem'
                            }}>
                                <FaFileDownload />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>Бланк заявления</h4>
                                <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: 0 }}>PDF, 256 KB</p>
                            </div>
                        </div>
                        <a href="/documents/application_form.pdf" download style={{
                            background: 'white', border: '1px solid var(--border)',
                            padding: '0.5rem 1rem', borderRadius: '4px',
                            color: 'var(--primary)', fontWeight: 500, textDecoration: 'none',
                            fontSize: '0.875rem', transition: 'all 0.2s'
                        }}>
                            Скачать
                        </a>
                    </div>

                    <div style={{
                        background: 'var(--card-bg)',
                        padding: '1.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '3rem', height: '3rem',
                                background: 'rgba(5, 150, 105, 0.1)',
                                borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--primary)', fontSize: '1.5rem'
                            }}>
                                <FaFileDownload />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>Типовой договор</h4>
                                <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: 0 }}>DOCX, 120 KB</p>
                            </div>
                        </div>
                        <a href="/documents/contract_template.docx" download style={{
                            background: 'white', border: '1px solid var(--border)',
                            padding: '0.5rem 1rem', borderRadius: '4px',
                            color: 'var(--primary)', fontWeight: 500, textDecoration: 'none',
                            fontSize: '0.875rem', transition: 'all 0.2s'
                        }}>
                            Скачать
                        </a>
                    </div>
                </div>
            </div>

            {/* Contacts Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>Контакты договорного отдела</h3>
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--primary)', fontSize: '1.25rem' }}><FaMapMarkerAlt /></div>
                        <div>
                            <p style={{ fontWeight: 600, margin: 0 }}>Адрес офиса:</p>
                            <p style={{ margin: 0, opacity: 0.8 }}>360000, КБР, г. Нальчик, ул. Ленина, 57</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--primary)', fontSize: '1.25rem' }}><FaPhoneAlt /></div>
                        <div>
                            <p style={{ fontWeight: 600, margin: 0 }}>Телефон:</p>
                            <a href="tel:88005500000" style={{ margin: 0, opacity: 0.8, color: 'inherit', textDecoration: 'none' }}>8 (800) 550-00-00 (доб. 2)</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--primary)', fontSize: '1.25rem' }}><FaEnvelope /></div>
                        <div>
                            <p style={{ fontWeight: 600, margin: 0 }}>Email для приема заявок:</p>
                            <a href="mailto:info@ecologistika.com" style={{ margin: 0, opacity: 0.8, color: 'inherit', textDecoration: 'none' }}>info@ecologistika.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
