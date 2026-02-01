import styles from "./BusinessSteps.module.css";

const steps = [
    {
        number: "01",
        title: "Подготовьте документы",
        description: "Вам понадобятся: копия свидетельства ОГРН/ИП, карточка предприятия, документ на право собственности или аренды помещения."
    },
    {
        number: "02",
        title: "Заполните заявку",
        description: "Скачайте бланк заявки на сайте в разделе Документы, заполните его и заверьте печатью/подписью."
    },
    {
        number: "03",
        title: "Направьте нам",
        description: "Отправьте скан-копии документов и заявки на электронную почту info@ecologistika.com или принесите в офис."
    },
    {
        number: "04",
        title: "Получите договор",
        description: "Наши специалисты подготовят проект договора и направят вам на подписание. После этого начнется обслуживание."
    }
];

export const BusinessSteps = () => {
    return (
        <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                    <div className={styles.number}>{step.number}</div>
                    <div className={styles.content}>
                        <h4 className={styles.title}>{step.title}</h4>
                        <p className={styles.description}>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
