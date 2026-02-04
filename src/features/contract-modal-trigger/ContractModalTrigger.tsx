"use client";

import { useState } from "react";
import styles from "./ContractModalTrigger.module.css";
import { Modal } from "@/shared/ui/Modal/Modal";
import { ContractForm } from "@/features/contract-form/ContractForm";

import { useTranslation } from "@/shared/lib/hooks/useTranslation";

export const ContractModalTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <button className={styles.silverButton} onClick={() => setIsOpen(true)}>
                {t.businessContract.form.button}
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t.businessContract.form.title}>
                <ContractForm />
            </Modal>
        </>
    );
};
