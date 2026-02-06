'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './BusinessFeedbackForm.module.css';
import { FaPlus, FaFileAlt } from 'react-icons/fa';

interface FeedbackFormData {
    fullName: string;
    email: string;
    organizationName: string;
    phone: string;
    message: string;
}

export const BusinessFeedbackForm = () => {
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
            alert('Необходимо дать согласие на обработку персональных данных');
            return;
        }

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Form data:', data, 'Files:', files);
            alert('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
            reset();
            setFiles([]);
            setConsent(false);
        } catch (error) {
            console.error('Error sending feedback:', error);
            alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Задать вопрос</h2>
            <p className={styles.subtitle}>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</p>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                {/* Full Name */}
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="fullName">
                        Ф. И. О <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="fullName"
                        className={styles.input}
                        placeholder="Иванов Иван Иванович"
                        {...register('fullName', { required: 'Введите ФИО' })}
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
                        Email <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={styles.input}
                        placeholder="example@company.com"
                        {...register('email', {
                            required: 'Введите Email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Некорректный Email адрес'
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
                        Наименование организации <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="organizationName"
                        className={styles.input}
                        placeholder="ООО «Ромашка»"
                        {...register('organizationName', { required: 'Введите название организации' })}
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
                        Телефон <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        className={styles.input}
                        placeholder="+7 (999) 000-00-00"
                        {...register('phone', {
                            required: 'Введите номер телефона',
                            minLength: { value: 10, message: 'Минимум 10 цифр' }
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
                        Сообщение <span className={styles.required}>*</span>
                    </label>
                    <textarea
                        id="message"
                        className={styles.textarea}
                        placeholder="Опишите ваш вопрос или предложение..."
                        {...register('message', { required: 'Введите сообщение' })}
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
                        Прикрепите фото (видео)
                    </label>
                    <label className={styles.uploadArea}>
                        <input type="file" multiple onChange={handleUpload} style={{ display: 'none' }} />
                        <span className={styles.uploadText}><FaPlus /> Добавить файл</span>
                    </label>
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
                            Нажимая кнопку «ОТПРАВИТЬ», я даю свое согласие на обработку моих персональных данных на условиях и для целей, определенных в политике обработки персональных данных
                        </span>
                    </label>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting || !consent}>
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </button>
                </div>
            </form>
        </div>
    );
};
