import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./MobileTopBar.module.css";

export default function MobileTopBar() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ThemeToggle />
                <div className={styles.divider}></div>
                <LanguageSwitcher />
            </div>
        </div>
    );
}
