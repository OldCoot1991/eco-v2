'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './BusinessFeedbackForm.module.css';
import { FaPlus, FaFileAlt } from 'react-icons/fa';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

interface FeedbackFormData {
    fullName: string;
    email: string;
    organizationName: string;
    phone: string;
    message: string;
}

export const BusinessFeedbackForm = () => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FeedbackFormData>();

    const [files, setFiles] = useState<File[]>([]);
    const [consent, setConsent] = useState(false);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const onSubmit = async (data: FeedbackFormData) => {
        if (!consent) {
            alert(t.businessFeedback.form.consent); // Using consent text as warning for now, or add specific warning key
            return;
        }

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // Removed console.log for production
            alert(t.businessFeedback.form.success);
            reset();
            setFiles([]);
            setConsent(false);
        } catch (error) {
            // Error handling remains for development debugging if needed
            console.error('Error sending feedback:', error);
            alert(t.businessFeedback.form.error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{t.businessFeedback.form.title}</h2>
            <p className={styles.subtitle}>{t.businessFeedback.form.subtitle}</p>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                {/* Full Name */}
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="fullName">
                        {t.businessFeedback.form.fullName} <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="fullName"
                        className={styles.input}
                        placeholder={t.businessFeedback.form.fullName}
                        {...register('fullName', { required: t.businessFeedback.form.fullName + ' is required' })}
                    />
                    {errors.fullName && (
                        <span className={styles.error}>
                            ⚠ {errors.fullName.message}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                        {t.businessFeedback.form.email} <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={styles.input}
                        placeholder="example@company.com"
                        {...register('email', {
                            required: t.businessFeedback.form.email + ' is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && (
                        <span className={styles.error}>
                            ⚠ {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Organization Name */}
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="organizationName">
                        {t.businessFeedback.form.organization} <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="organizationName"
                        className={styles.input}
                        placeholder={t.businessFeedback.form.organization}
                        {...register('organizationName', { required: t.businessFeedback.form.organization + ' is required' })}
                    />
                    {errors.organizationName && (
                        <span className={styles.error}>
                            ⚠ {errors.organizationName.message}
                        </span>
                    )}
                </div>

                {/* Phone */}
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">
                        {t.businessFeedback.form.phone} <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        className={styles.input}
                        placeholder="+7 (999) 000-00-00"
                        {...register('phone', {
                            required: t.businessFeedback.form.phone + ' is required',
                            minLength: { value: 10, message: 'Minimum 10 digits' }
                        })}
                    />
                    {errors.phone && (
                        <span className={styles.error}>
                            ⚠ {errors.phone.message}
                        </span>
                    )}
                </div>

                {/* Message */}
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">
                        {t.businessFeedback.form.message} <span className={styles.required}>*</span>
                    </label>
                    <textarea
                        id="message"
                        className={styles.textarea}
                        placeholder={t.businessFeedback.form.message}
                        {...register('message', { required: t.businessFeedback.form.message + ' is required' })}
                    />
                    {errors.message && (
                        <span className={styles.error}>
                            ⚠ {errors.message.message}
                        </span>
                    )}
                </div>

                {/* File Upload Section */}
                <div className={styles.filesSection}>
                    <label className={styles.uploadLabel}>
                        {t.businessFeedback.form.attachFiles}
                    </label>
                    <label className={styles.uploadArea}>
                        <input type="file" multiple onChange={handleUpload} className={styles.fileInput} />
                        <span className={styles.uploadText}><FaPlus /> {t.businessFeedback.form.addFile}</span>
                    </label>
                    {files.length > 0 && (
                        <div className={styles.fileList}>
                            {files.map((file, i) => (
                                <div key={i} className={styles.fileItem}>
                                    <FaFileAlt />
                                    <div>
                                        <div className={styles.fileName}>{file.name}</div>
                                        <div className={styles.fileSize}>{Math.round(file.size / 1024)} KB</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Consent Checkbox */}
                <div className={styles.formFooter}>
                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={consent}
                            onChange={() => setConsent(!consent)}
                        />
                        <span>
                            {t.businessFeedback.form.consent}
                        </span>
                    </label>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting || !consent}>
                        {isSubmitting ? t.businessFeedback.form.sending : t.businessFeedback.form.submit}
                    </button>
                </div>
            </form>
        </div>
    );
};
