"use client";

import React, { useState } from "react";
import styles from "./Vacancies.module.css";

interface Vacancy {
  text: string;
  paragraph: string;
  tel: string;
}

const VAKANSII_DATA: Vacancy[] = [
  {
    text: "Водители мусоровозов",
    paragraph: "заработная плата: от 70 000 руб.",
    tel: "+7 (988) 921-99-00",
  },
  {
    text: "Помощники водителя мусоровоза (грузчики)",
    paragraph: "заработная плата: от 60 000 руб.",
    tel: "+7 (988) 921-99-00",
  },
  {
    text: "Кассир-операционист",
    paragraph: "заработная плата: от 33 000 руб.",
    tel: "+7 (938) 075-43-93",
  },
  {
    text: "Дворник",
    paragraph: "заработная плата: от 40 000 руб.",
    tel: "+7 (938) 079-12-19",
  },
];

const Vacancies = () => {
  const [openedKeys, setOpenedKeys] = useState<Set<number>>(new Set());

  const toggleVacancy = (index: number) => {
    const newKeys = new Set(openedKeys);
    if (newKeys.has(index)) {
      newKeys.delete(index);
    } else {
      newKeys.add(index);
    }
    setOpenedKeys(newKeys);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {VAKANSII_DATA.map((job, i) => {
            const isOpen = openedKeys.has(i);
            return (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.positionTitle}>{job.text}</h3>
                  <p className={styles.salary}>{job.paragraph}</p>
                </div>
                
                <div
                  className={`${styles.detailsToggle} ${
                    isOpen ? styles.detailsToggleActive : ""
                  }`}
                  onClick={() => toggleVacancy(i)}
                >
                  <span>Подробнее по телефону</span>
                  <span>{isOpen ? "▲" : "▼"}</span>
                </div>

                <div
                  className={`${styles.detailsContent} ${
                    isOpen ? styles.detailsContentActive : ""
                  }`}
                >
                  <p className={styles.contactLabel}>Обращаться по телефону:</p>
                  <div className={styles.contactInfo}>
                    <a href={`tel:${job.tel}`} className={styles.contactPhone}>
                      {job.tel}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.infoSection}>
          <p className={styles.infoTitle}>Справки по телефонам:</p>
          <div className={styles.infoContent}>
            <a href="tel:+79287072972" className={styles.infoPhone}>
              8 (928) 707-29-72
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
