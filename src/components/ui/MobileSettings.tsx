import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./MobileSettings.module.css";

export default function MobileSettings() {
    return (
        <div className={styles.container}>
            <LanguageSwitcher />
            <ThemeToggle />
        </div>
    );
}
