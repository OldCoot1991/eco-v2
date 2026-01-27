"use client";

import { useEffect, useRef } from "react";
import styles from "./GosuslugiSection.module.css";

export const GosuslugiSection = () => {
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Gosuslugi script
        const script = document.createElement("script");
        script.src = "https://pos.gosuslugi.ru/bin/script.min.js";
        script.async = true;
        document.body.appendChild(script);

        // Inject widget HTML after script loads
        script.onload = () => {
            if (widgetRef.current) {
                widgetRef.current.innerHTML = `
                    <div class="pos-banner-fluid" data-id="471877"></div>
                `;
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className={styles.gosuslugi}>
            <div className={styles.container}>
                <div className={styles.widgetWrapper} ref={widgetRef} />
            </div>
        </section>
    );
};
