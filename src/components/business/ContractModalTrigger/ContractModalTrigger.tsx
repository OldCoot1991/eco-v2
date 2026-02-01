"use client";

import { useState } from "react";
import styles from "./ContractModalTrigger.module.css";
import { Modal } from "@/components/ui/Modal/Modal";
import { ContractForm } from "../ContractForm/ContractForm";

export const ContractModalTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={styles.silverButton} onClick={() => setIsOpen(true)}>
                Заявка на заключение договора
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Заявка на заключение договора">
                <ContractForm />
            </Modal>
        </>
    );
};
