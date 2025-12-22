import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import SocialLinks from "./SocialLinks";
import styles from "./TopBarSettings.module.css";

export default function TopBarSettings() {
    return (
        <div className={styles.container}>
            <SocialLinks />
            <div className={styles.divider}></div>
            <ThemeToggle />
            <LanguageSwitcher />
        </div>
    );
}
