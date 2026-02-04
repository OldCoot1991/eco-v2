import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./StoreButton.module.css";

interface StoreButtonProps {
    icon: IconType;
    label: string;
    title: string;
    variant: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
}

export const StoreButton = ({ icon: Icon, label, title, variant, href, onClick }: StoreButtonProps) => {
    const buttonClass = `${styles.appButton} ${variant === 'primary' ? styles.appButtonPrimary : styles.appButtonSecondary}`;

    const content = (
        <>
            <Icon className={styles.appIcon} />
            <div className={styles.appButtonText}>
                <div className={styles.appButtonLabel}>{label}</div>
                <div className={styles.appButtonTitle}>{title}</div>
            </div>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {content}
            </Link>
        );
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {content}
        </button>
    );
};
