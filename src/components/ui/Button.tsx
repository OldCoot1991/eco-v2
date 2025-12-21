"use client";

import React, { ButtonHTMLAttributes } from "react";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string; // If provided, renders as Link
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    icon,
    className = "",
    fullWidth = false,
    ...props
}: ButtonProps) {
    // Base styles
    const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 overflow-hidden group";

    // Size styles
    const sizeStyles = {
        sm: "px-5 py-3 text-base", // Taller and larger text
        md: "px-8 py-4 text-lg",
        lg: "px-10 py-5 text-xl",
    };

    // Variant Styles with Dark Mode support via CSS classes
    const getVariantStyles = () => {
        switch (variant) {
            case "primary":
                return `
                    bg-[linear-gradient(90deg,#9BC329,#009445)] text-white hover:shadow-lg hover:brightness-105 border border-transparent shadow-md
                    dark:shadow-none
                `;
            case "secondary":
                return `
                    bg-stone-200 text-stone-900 hover:bg-stone-300 border border-stone-300
                    dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700
                `;
            case "outline":
                return `
                    bg-transparent text-emerald-800 border-2 border-emerald-700 hover:bg-emerald-50 hover:text-emerald-900
                    dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black
                `;
            case "ghost":
                return `
                    bg-transparent text-emerald-800 hover:bg-emerald-50
                    dark:text-white dark:hover:bg-white/10
                `;
            default:
                return "";
        }
    };

    const combinedClassName = `
        ${baseStyles}
        ${sizeStyles[size]}
        ${getVariantStyles()}
        ${fullWidth ? "w-full" : ""}
        ${className}
        rounded-[4px]
    `;

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
            </span>
            {/* Hover Effect Background - Optional fancy slide could go here */}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {content}
        </button>
    );
}
