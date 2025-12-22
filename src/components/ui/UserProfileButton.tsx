import Link from "next/link";
import { FaUser } from "react-icons/fa";
import styles from "./UserProfileButton.module.css";

export default function UserProfileButton() {
    return (
        <Link href="/profile" className={styles.link} aria-label="Вход в кабинет">
            <FaUser className={styles.icon} />
        </Link>
    );
}
