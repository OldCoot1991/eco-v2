"use client";
import React from 'react';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";
import styles from "../page.module.css";
import { SectionTitle } from '@/shared/ui/SectionTitle/SectionTitle';

export default function EcostroyContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.pageContainer}>
            <SectionTitle title={t.pages.ecostroy.title} />

            <div className={styles.section}>
                <p className={styles.pageText}>
                    Проект «ЭкоСтрой» направлен на модернизацию инфраструктуры обращения с отходами в Кабардино-Балкарской Республике. Ключевая цель — создание современной системы переработки, минимизация объемов захоронения и улучшение экологической обстановки.
                </p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Ключевые объекты</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Строительство мусороперерабатывающего завода:</strong> Крупный инвестиционный проект мощностью 300 тысяч тонн в год. Завод позволит сортировать 100% входящего потока ТКО и извлекать полезные фракции для вторичного использования.
                    </li>
                    <li className={styles.listItem}>
                        <strong>Модернизация полигонов:</strong> Рекультивация старых свалок и приведение действующих полигонов к современным экологическим стандартам.
                    </li>
                    <li className={styles.listItem}>
                        <strong>Сеть мусороперегрузочных станций:</strong> Оптимизация логистики транспортировки отходов из отдаленных районов республики.
                    </li>
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Ожидаемые результаты</h3>
                <p className={styles.pageText}>
                    Реализация данных проектов позволит сократить объем захоронения отходов в 2 раза к 2030 году, создать новые рабочие места и внедрить раздельный сбор мусора во всех населенных пунктах КБР.
                </p>
            </div>
        </div>
    );
}
