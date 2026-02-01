import Link from "next/link";
import styles from "./HowItWorks.module.css";

const steps = [
    {
        number: "01",
        title: "Оставьте заявку",
        description: "Заполните простую форму на сайте или в мобильном приложении",
    },
    {
        number: "02",
        title: "Подтверждение",
        description: "Наш менеджер свяжется с вами для уточнения деталей и графика вывоза",
    },
    {
        number: "03",
        title: "Вывоз мусора",
        description: "Специализированная техника приедет точно в назначенное время",
    }
];

export const HowItWorks = () => {
    return (
        <section className={styles.howItWorks}>
            {/* Background patterns */}
            <div className={styles.bgPattern}>
                <div className={styles.bgGradient} />
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <h2 className={styles.heading}>
                            Как мы работаем
                        </h2>
                        <p className={styles.description}>
                            Простой и прозрачный процесс взаимодействия для вашего удобства
                        </p>
                    </div>

                    <Link href="/company/about" className={styles.aboutLink}>
                        Подробнее о компании
                    </Link>
                </div>

                <div className={styles.grid}>
                    {/* Connecting line */}
                    <div className={styles.connectingLine} />

                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepCircle}>
                                <span className={styles.stepNumber}>
                                    {step.number}
                                </span>
                            </div>

                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>
                                    {step.title}
                                </h3>
                                <p className={styles.stepDescription}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.mobileLink}>
                    <Link href="/company/about">
                        Подробнее о компании
                    </Link>
                </div>
            </div>
        </section>
    );
};
