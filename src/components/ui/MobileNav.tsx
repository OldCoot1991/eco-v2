import AnimatedLogo from "./AnimatedLogo";
import BurgerMenu from "./BurgerMenu";
import UserProfileButton from "./UserProfileButton";
import styles from "./MobileNav.module.css";

export default function MobileNav() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftSection}>
                    <BurgerMenu />
                </div>

                <div className={styles.centerSection}>
                    <AnimatedLogo />
                </div>

                <div className={styles.rightSection}>
                    <UserProfileButton />
                </div>
            </div>
        </div>
    );
}
