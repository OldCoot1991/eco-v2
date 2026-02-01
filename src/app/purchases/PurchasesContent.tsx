"use client";
import React from 'react';
import { useTranslation } from "@/lib/hooks/useTranslation";
import styles from "../page.module.css";
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';

export default function PurchasesContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.pageContainer}>
            <SectionTitle title={t.pages.purchases.title} />

            <div className={styles.section}>
                <p className={styles.pageText}>
                    ООО «Экологистика» осуществляет закупочную деятельность в соответствии с Федеральным законом № 223-ФЗ «О закупках товаров, работ, услуг отдельными видами юридических лиц».
                </p>
                <p className={styles.pageText}>
                    Мы стремимся к открытости и прозрачности процедур, приглашая к сотрудничеству надежных поставщиков товаров и услуг, в том числе субъектов малого и среднего предпринимательства (МСП).
                </p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Текущие закупки</h3>
                <p className={styles.pageText}>
                    Информация о проводимых тендерах и конкурсах размещается в Единой информационной системе (ЕИС) в сфере закупок.
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Поставка горюче-смазочных материалов.</li>
                    <li className={styles.listItem}>Закупка спецтехники в лизинг.</li>
                    <li className={styles.listItem}>Приобретение запчастей и комплектующих для мусоровозов.</li>
                    <li className={styles.listItem}>Услуги по обслуживанию IT-инфраструктуры.</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Документы для поставщиков</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Положение о закупках товаров, работ, услуг ООО «Экологистика».</li>
                    <li className={styles.listItem}>Перечень товаров, работ, услуг, закупки которых осуществляются у субъектов МСП.</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Контакты отдела закупок</h3>
                <p className={styles.pageText}>
                    По вопросам участия в закупках и коммерческим предложениям:<br />
                    Email: <a href="mailto:info@ecologistika.com" style={{ color: 'var(--primary)' }}>info@ecologistika.com</a><br />
                    Телефон: +7 (8662) 22-91-10 (доб. отдел закупок)
                </p>
            </div>
        </div>
    );
}
