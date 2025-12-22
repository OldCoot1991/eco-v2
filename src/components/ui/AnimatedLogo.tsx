"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import SnowEffect from "./SnowEffect";

export default function AnimatedLogo() {
    const [isSnowing, setIsSnowing] = useState(false);

    return (
        <>
            {isSnowing && <SnowEffect />}
            <Link
                href="/"
                className="flex items-center group shrink-0 relative z-10"
                onMouseEnter={() => setIsSnowing(true)}
                onMouseLeave={() => setIsSnowing(false)}
            >
                <Logo className="h-8 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105" />
            </Link>
        </>
    );
}
