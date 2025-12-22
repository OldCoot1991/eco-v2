import { FaVk, FaTelegram } from "react-icons/fa";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
    return (
        <div className={styles.container}>
            <a href="#" aria-label="VK" className={`${styles.link} ${styles.vk}`}>
                <FaVk className={styles.icon} />
            </a>
            <a href="#" aria-label="Telegram" className={`${styles.link} ${styles.telegram}`}>
                <FaTelegram className={styles.icon} />
            </a>
        </div>
    );
}
