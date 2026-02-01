import { FaUser } from "react-icons/fa";
import styles from "./UserProfileButton.module.css";
import Link from "next/link";

export default function UserProfileButton() {
    return (
        <Link href="https://lk.ecologistika.com/auth/login" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Вход в кабинет">
            <FaUser className={styles.icon} />
        </Link>
    );
}
