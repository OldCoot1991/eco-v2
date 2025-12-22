"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import SnowEffect from "./SnowEffect";
import styles from "./AnimatedLogo.module.css";

export default function AnimatedLogo() {
    const [isSnowing, setIsSnowing] = useState(false);

    return (
        <>
            {isSnowing && <SnowEffect />}
            <Link
                href="/"
                className={styles.link}
                onMouseEnter={() => setIsSnowing(true)}
                onMouseLeave={() => setIsSnowing(false)}
            >
                <Logo className={styles.logo} />
            </Link>
        </>
    );
}
