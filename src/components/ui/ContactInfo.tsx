import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
    return (
        <div className={styles.container}>
            <span className={styles.item}>
                Нальчик, ул. Ленина 1
            </span>
            <a href="tel:+78001234567" className={styles.link}>
                +7 (800) 123-45-67
            </a>
        </div>
    );
}
