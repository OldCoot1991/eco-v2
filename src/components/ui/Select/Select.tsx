"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';
import { FaChevronDown } from 'react-icons/fa';

interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    // Allow simple string array, OR array of tuples/arrays (like orgs data)
    options: string[] | any[][];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export const Select = ({ value, onChange, options, placeholder = "Выберите значение", disabled = false, className = '' }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (val: string) => {
        if (disabled) return;
        onChange(val);
        setIsOpen(false);
    };

    // Helper to get display label whether it's simple string or tuple/array
    const getOptionLabel = (opt: string | any[]) => {
        return Array.isArray(opt) ? opt[0] : opt;
    };

    // Helper to check if option is disabled (for orgs grouping logic)
    const isOptionDisabled = (opt: string | any[]) => {
        if (Array.isArray(opt)) {
            // Logic specific to orgs structure: [name, value]
            // If value is falsy or missing (length 1), it's a category header
            return !opt[1];
        }
        return false;
    };

    return (
        <div
            className={`${styles.container} ${isOpen ? styles.open : ''} ${className}`}
            ref={containerRef}
        >
            <div
                className={`${styles.trigger} ${disabled ? styles.disabled : ''}`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                {value ? (
                    <span className={styles.value}>{value}</span>
                ) : (
                    <span className={styles.placeholder}>{placeholder}</span>
                )}
                <div className={styles.arrow}>
                    <FaChevronDown size={14} />
                </div>
            </div>

            {isOpen && !disabled && (
                <div className={styles.dropdown}>
                    {options.map((opt, i) => {
                        const label = getOptionLabel(opt);
                        const isDisabled = isOptionDisabled(opt);
                        const isSelected = label === value;

                        // Different styling for disabled headers (like "OOO", "AO" or Categories)
                        if (isDisabled) {
                            return (
                                <div
                                    key={i}
                                    className={`${styles.option}`}
                                    style={{ fontWeight: 'bold', background: 'var(--background)', opacity: 0.8, cursor: 'default' }}
                                >
                                    {label}
                                    {/* Optional: Add a subtle divider if it's a category header */}
                                </div>
                            );
                        }

                        return (
                            <div
                                key={i}
                                className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                                onClick={() => handleSelect(label)}
                            >
                                {label}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
