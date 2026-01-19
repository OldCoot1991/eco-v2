"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme } from "@/lib/features/theme/themeSlice";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    // Reusable inner content for the toggle to ensure identical design
    const ToggleContent = () => (
        <>
            {/* Dynamic Backgrounds */}
            <div className={`${styles.bgDark} ${theme === 'dark' ? styles.bgDarkVisible : styles.bgDarkHidden}`}>
                <div className={styles.bgDarkGradient} />
                {/* Stars */}
                <div className={styles.star1} />
                <div className={styles.star2} />
                <div className={styles.star3} />
            </div>
            <div className={`${styles.bgLight} ${theme === 'dark' ? styles.bgLightHidden : styles.bgLightVisible}`}>
                <div className={styles.bgLightGradient} />
                {/* Clouds */}
                <div className={styles.cloud1} />
                <div className={styles.cloud2} />
            </div>
        </>
    );

    // Reusable knob (Sun/Moon)
    const ToggleKnob = ({ isMobile }: { isMobile: boolean }) => (
        <div className={`
            ${styles.knob} 
            ${isMobile ? styles.knobMobile : styles.knobDesktop}
            ${theme === 'dark' ? styles.knobDark : styles.knobLight}
            ${theme === 'dark' ? (isMobile ? styles.knobTranslateDark : styles.knobTranslateDarkDesktop) : styles.knobTranslateLight}
        `}>
            {theme === 'dark' ? (
                <div className={styles.moon}>
                    {/* Moon Craters */}
                    <div className={styles.crater1} />
                    <div className={styles.crater2} />
                </div>
            ) : (
                <div className={styles.sun}>
                    <div className={styles.sunGradient} />
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Mobile/Tablet: Premium Day/Night Switch */}
            <button
                onClick={() => dispatch(toggleTheme())}
                className={`${styles.mobileButton} ${theme === 'dark' ? styles.mobileButtonDark : styles.mobileButtonLight}`}
                aria-label="Переключить тему"
            >
                <ToggleContent />
                <ToggleKnob isMobile={true} />
            </button>

            {/* Desktop: Premium Day/Night Switch */}
            <button
                onClick={() => dispatch(toggleTheme())}
                className={`${styles.desktopButton} ${theme === 'dark' ? styles.desktopButtonDark : styles.desktopButtonLight}`}
                aria-label="Переключить тему"
            >
                <ToggleContent />
                <ToggleKnob isMobile={false} />
            </button>
        </>
    );
}
