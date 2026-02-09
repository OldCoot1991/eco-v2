"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';
import { FaChevronDown } from 'react-icons/fa';
import clsx from 'clsx';

// Generic type for options: can be a string or a tuple [label, value]
export type SelectOption = string | [string, string];

interface SelectProps<T extends SelectOption> {
    value: string;
    onChange: (value: string) => void;
    options: T[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export const Select = <T extends SelectOption>({
    value,
    onChange,
    options,
    placeholder = "Выберите значение",
    disabled = false,
    className = ''
}: SelectProps<T>) => {
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

    // Helper to get display label
    const getOptionLabel = (opt: T): string => {
        return Array.isArray(opt) ? opt[0] : (opt as string);
    };

    // Helper to get option value
    const getOptionValue = (opt: T): string => {
        return Array.isArray(opt) ? opt[0] : (opt as string);
    }

    // Helper to check if option is disabled (header)
    const isOptionDisabled = (opt: T): boolean => {
        if (Array.isArray(opt)) {
            // [label, value]
            // If value is empty, treat as header
            return !opt[1];
        }
        return false;
    };

    return (
        <div
            className={clsx(styles.container, isOpen && styles.open, className)}
            ref={containerRef}
        >
            <div
                className={clsx(styles.trigger, disabled && styles.disabled)}
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

                        if (isDisabled) {
                            return (
                                <div
                                    key={i}
                                    className={clsx(styles.option, styles.optionHeader)}
                                >
                                    {label}
                                </div>
                            );
                        }

                        return (
                            <div
                                key={i}
                                className={clsx(styles.option, isSelected && styles.selected)}
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
