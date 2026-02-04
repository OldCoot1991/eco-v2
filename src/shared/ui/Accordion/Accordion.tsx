"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Accordion.module.css";

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <button className={styles.header} onClick={onClick}>
                <span className={styles.title}>{title}</span>
                {isOpen ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
            </button>
            <div className={styles.contentWrapper} style={{ maxHeight: isOpen ? "1000px" : "0" }}>
                <div className={styles.content}>{content}</div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
}

export const Accordion = ({ items }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};
