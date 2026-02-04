import styles from "./SocialLinks.module.css";
import { socialLinks } from "./socialLinksData";

export default function SocialLinks() {
    return (
        <div className={styles.container}>
            {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className={`${styles.link} ${styles[link.className]}`}
                    >
                        <Icon className={styles.icon} />
                    </a>
                );
            })}
        </div>
    );
}
