import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <input
                    type="text"
                    placeholder="Поиск по сайту..."
                    className={styles.input}
                />
                <FaSearch className={styles.icon} />
            </div>
        </div>
    );
}
