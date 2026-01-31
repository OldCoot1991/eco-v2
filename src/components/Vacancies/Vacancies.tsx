"use client";

import React from "react";
import styles from "./Vacancies.module.css";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { FaPhone } from "react-icons/fa";

const PHONES = [
  "+7 (988) 921-99-00",
  "+7 (988) 921-99-00",
  "+7 (938) 075-43-93",
  "+7 (938) 079-12-19"
];

const Vacancies = () => {
  const { t } = useTranslation();

  const vacanciesList = t.jobs.list.map((job, i) => ({
    text: job.title,
    paragraph: `${t.jobs.salary} ${job.salary} ${t.jobs.rub}`,
    tel: PHONES[i] || PHONES[0]
  }));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {vacanciesList.map((job, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.positionTitle}>{job.text}</h3>
                <p className={styles.salary}>{job.paragraph}</p>
              </div>

              <div className={styles.contactSection}>
                <div className={styles.contactInfo}>
                  <a href={`tel:${job.tel}`} className={styles.contactPhone}>
                    <FaPhone className={styles.phoneIcon} />
                    <span>{job.tel}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoSection}>
          <p className={styles.infoTitle}>{t.jobs.contacts}:</p>
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
