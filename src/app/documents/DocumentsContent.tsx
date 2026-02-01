"use client";
import React from 'react';
import { useTranslation } from "@/lib/hooks/useTranslation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "../page.module.css";

export default function DocumentsContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.pageContainer}>
            <SectionTitle title={t.pages.documents.title} />

            <div className={styles.section}>
                <p className={styles.pageText}>
                    В данном разделе опубликованы официальные документы, регламентирующие деятельность регионального оператора ООО «Экологистика».
                </p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Лицензии и сертификаты</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Лицензия № Л020-00113-26/03623424 (Деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I-IV классов опасности).</li>
                    <li className={styles.listItem}>Лицензия № 007000150 от 28.10.2021 (Деятельность по управлению многоквартирными домами).</li>
                    <li className={styles.listItem}>Свидетельство о государственной регистрации юридического лица (ОГРН).</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Нормативно-правовые акты</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Федеральный закон № 89-ФЗ «Об отходах производства и потребления».</li>
                    <li className={styles.listItem}>Соглашение об организации деятельности по обращению с ТКО от 28.04.2018 (между Министерством строительства и ЖКХ КБР и ООО «Экологистика»).</li>
                    <li className={styles.listItem}>Постановление Правительства РФ № 1156 «Об обращении с твердыми коммунальными отходами».</li>
                    <li className={styles.listItem}>Приказ №214 (об утверждении тарифов на 2026 год).</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Типовые договоры</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <a href="/docs/contract_fiz.pdf" className="text-emerald-600 hover:text-emerald-700 underline">
                            Типовой договор с физическим лицом (оферта)
                        </a>
                    </li>
                    <li className={styles.listItem}>
                        <a href="/docs/contract_jur.pdf" className="text-emerald-600 hover:text-emerald-700 underline">
                            Типовой договор с юридическим лицом
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
