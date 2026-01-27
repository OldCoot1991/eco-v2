import styles from './companynumbers.module.css'

export default function CompanyNumbers() {
    return (
        <div className={styles.companynumbers}>
            <h2 className={styles.title}>Компания в цифрах на сегодняшний день</h2>
            <div className={styles.entry}>
                <Circle qty={1000} msr="Тонн" n={styles.first} />
                <div className={styles.description}>
                    Мусора вывозиться ежедневно
                </div>
            </div>
            <div className={styles.entry}>
                <Circle qty={6500} msr="Контейнеров" n={styles.second} />
                <div className={styles.description}>
                    Вычищается каждый день
                </div>
            </div>
            <div className={styles.entry}>
                <Circle qty={1000} msr="Километров" n={styles.third} />
                <div className={styles.description}>
                    Наши машины проезжают ежедневно
                </div>
            </div>
            <div className={styles.entry}>
                <Circle qty={1000} msr="Кубов" n={styles.fourth} />
                <div className={styles.description}>
                    Мусора вывозится каждый квартал
                </div>
            </div>
        </div>
    )
}

function Circle({ qty, msr, n }: { qty: Number, msr: String, n: string }) {
    return (
        <div className={`${styles.circle} ${n}`}>
            <p className={styles.qty}>
                {qty}
            </p>
            <p className={styles.msr}>{msr}</p>
        </div >
    )
}
