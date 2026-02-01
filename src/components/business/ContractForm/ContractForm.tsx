"use client";

import React, { useState, FormEvent } from 'react';
import styles from './ContractForm.module.css';
import { orgs } from '@/data/contract-orgs';
import { FaPlus, FaTrash, FaFileAlt, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import { Select } from '@/components/ui/Select/Select';

// Initial state types
const forIP = {
    orgType: 'Для ИП',
    orgName: '',
    okved: '',
    inn: '',
    kpp: '',
    ogrnip: '',
    bank: '',
    bank_schet: '',
    korr_schet: '',
    bik: '',
    jurAddr: '',
    postAddr: '',
    faktAddr: [''],
    wasteType: '',
    usluga: '',
    payment: 'Оплата по нормативам',
    orgIs: '',
    normativ: { title: '', value: '' },
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: [] as string[]
};

const forJur = {
    orgType: 'Для юридических лиц',
    orgName: '',
    okved: '',
    inn: '',
    kpp: '',
    ogrn: '',
    bank: '',
    bank_schet: '',
    korr_schet: '',
    bik: '',
    jurAddr: '',
    postAddr: '',
    faktAddr: [''],
    wasteType: '',
    usluga: '',
    payment: 'Оплата по нормативам',
    orgIs: '',
    normativ: { title: '', value: '' },
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: [] as string[]
};

const forFiz = {
    orgType: 'Для физических лиц',
    fullName: '',
    inn: '',
    pasp: '',
    postAddr: '',
    faktAddr: [''],
    wasteType: '',
    usluga: '',
    payment: 'Оплата по нормативам',
    dolzhn: '',
    orgIs: '',
    normativ: { title: '', value: '' },
    phoneNumber: '',
    email: '',
    comment: '',
    files: [] as string[]
};

const subAgreement = {
    orgType: 'Для юридических лиц',
    orgName: '',
    dogNo: '',
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: [] as string[]
};

const subAgreementFiz = {
    orgType: 'Для физических лиц',
    fullName: '',
    dogNo: '',
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: [] as string[]
};

const wasteTypes = ['Крупно-габаритный мусор (КГМ)', 'Твердые коммунальные отходы (ТКО)', 'Строительный мусор'];
const serviceTypes = ['На вывоз отходов (+ захоронение)', 'Только на захоронение'];

type FormType = typeof forJur & typeof forFiz & typeof subAgreement & { [key: string]: any };

export const ContractForm = () => {
    const [isSub, setIsSub] = useState(false);
    const [form, setForm] = useState<FormType>(forJur as any);
    const [files, setFiles] = useState<File[]>([]);
    const [warning, setWarning] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [signed, setSigned] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setWarning(false);

        // Simple validation check (checking required fields roughly)
        // In a real app, you'd use a validation schema like Zod
        const requiredFields = isSub
            ? ['phoneNumber', 'email', 'dogNo']
            : ['phoneNumber', 'email', 'postAddr'];

        const hasEmptyFields = requiredFields.some(field => !form[field as keyof FormType]);

        if (hasEmptyFields) {
            alert("Пожалуйста, заполните все обязательные поля");
            return;
        }

        if (files.length === 0) {
            setWarning(true);
            return;
        }

        // Mock submission
        setTimeout(() => {
            setSuccess(true);
            console.log("Form submitted:", form, files);
        }, 1000);
    };

    const handleAddressChange = (val: string, index: number) => {
        const newAddrs = [...(form.faktAddr || [])];
        newAddrs[index] = val;
        setForm({ ...form, faktAddr: newAddrs });
    };

    const handleAddAddress = () => {
        setForm({ ...form, faktAddr: [...(form.faktAddr || []), ''] });
    };

    const handleRemoveAddress = (index: number) => {
        const newAddrs = [...(form.faktAddr || [])];
        newAddrs.splice(index, 1);
        setForm({ ...form, faktAddr: newAddrs });
    };

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...newFiles]);
            const fileNames = newFiles.map(f => f.name);
            setForm({ ...form, files: [...form.files, ...fileNames] });
        }
    };

    const handlePaymentChange = (type: 'norm' | 'kont') => {
        if (type === 'norm') {
            setForm({ ...form, payment: 'Оплата по нормативам', kont_count: '', m3: '' });
        } else {
            setForm({ ...form, payment: 'Оплата по контейнерам', orgIs: '', normativ: { title: '', value: '' } });
        }
    };

    const currentNorm = orgs.find(org => org[0] === form.orgIs);

    if (success) {
        return (
            <div className={styles.container} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                    <FaCheck />
                </div>
                <h2 className={styles.title}>Спасибо за Вашу заявку!</h2>
                <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>
                    Наши специалисты рассмотрят её и свяжутся с Вами в ближайшее время.
                </p>
                <button
                    onClick={() => { setSuccess(false); setSubmitted(false); setSigned(false); setFiles([]); }}
                    className={styles.submit_btn}
                    style={{ marginTop: '2rem', maxWidth: '300px' }}
                >
                    Отправить еще заявку
                </button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <button
                    onClick={() => { setIsSub(false); setForm(forJur as any); }}
                    className={!isSub ? styles.submit_btn : styles.remove_btn}
                    style={{ flex: 1, padding: '0.75rem', fontSize: '1rem' }}
                >
                    Заключить договор
                </button>
                <button
                    onClick={() => { setIsSub(true); setForm(subAgreement as any); }}
                    className={isSub ? styles.submit_btn : styles.remove_btn}
                    style={{ flex: 1, padding: '0.75rem', fontSize: '1rem' }}
                >
                    Доп. соглашение
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                {!isSub && (
                    <div className={styles.radios}>
                        <label className={styles.radio}>
                            <span className={styles.radio_text}>Для юридических лиц</span>
                            <input
                                type="radio"
                                name="orgType"
                                checked={form.orgType === 'Для юридических лиц'}
                                onChange={() => setForm(forJur as any)}
                            />
                        </label>
                        <label className={styles.radio}>
                            <span className={styles.radio_text}>Для ИП</span>
                            <input
                                type="radio"
                                name="orgType"
                                checked={form.orgType === 'Для ИП'}
                                onChange={() => setForm(forIP as any)}
                            />
                        </label>
                        <label className={styles.radio}>
                            <span className={styles.radio_text}>Для физ. лиц</span>
                            <input
                                type="radio"
                                name="orgType"
                                checked={form.orgType === 'Для физических лиц'}
                                onChange={() => setForm(forFiz as any)}
                            />
                        </label>
                    </div>
                )}

                {isSub && (
                    <div className={styles.radios}>
                        <label className={styles.radio}>
                            <span className={styles.radio_text}>Для юридических лиц / ИП</span>
                            <input
                                type="radio"
                                name="orgTypeSub"
                                checked={form.orgType === 'Для юридических лиц'}
                                onChange={() => setForm(subAgreement as any)}
                            />
                        </label>
                        <label className={styles.radio}>
                            <span className={styles.radio_text}>Для физ. лиц</span>
                            <input
                                type="radio"
                                name="orgTypeSub"
                                checked={form.orgType === 'Для физических лиц'}
                                onChange={() => setForm(subAgreementFiz as any)}
                            />
                        </label>
                    </div>
                )}


                {/* COMMON FIELDS BASE ON TYPE */}
                {form.orgType === 'Для физических лиц' ? (
                    <>
                        <input
                            value={form.fullName || ''}
                            onChange={e => setForm({ ...form, fullName: e.target.value })}
                            className={`${styles.input} ${submitted && !form.fullName && styles.not_filled}`}
                            placeholder="Ф.И.О."
                        />
                        {submitted && !form.fullName && <span className={styles.not_filled_warning}>Введите данные</span>}
                    </>
                ) : (
                    <>
                        <input
                            value={form.orgName || ''}
                            onChange={e => setForm({ ...form, orgName: e.target.value })}
                            className={`${styles.input} ${submitted && !form.orgName && styles.not_filled}`}
                            placeholder={`Наименование ${form.orgType === 'Для ИП' ? 'ИП' : 'организации'}`}
                        />
                        {submitted && !form.orgName && <span className={styles.not_filled_warning}>Введите данные</span>}
                    </>
                )}

                {isSub && (
                    <>
                        <input
                            value={form.dogNo || ''}
                            onChange={e => setForm({ ...form, dogNo: e.target.value })}
                            className={`${styles.input} ${submitted && !form.dogNo && styles.not_filled}`}
                            placeholder="Номер договора"
                        />
                        {submitted && !form.dogNo && <span className={styles.not_filled_warning}>Введите данные</span>}
                    </>
                )}

                {!isSub && (
                    <>
                        {form.orgType !== 'Для физических лиц' && (
                            <>
                                <input
                                    value={form.okved || ''}
                                    onChange={e => setForm({ ...form, okved: e.target.value })}
                                    className={styles.input}
                                    placeholder="Вид деятельности, ОКВЭД"
                                />
                                <div className={styles.inn_kpp}>
                                    <div>
                                        <input
                                            value={form.inn || ''}
                                            onChange={e => setForm({ ...form, inn: e.target.value })}
                                            className={`${styles.input} ${submitted && !form.inn && styles.not_filled}`}
                                            placeholder="ИНН"
                                        />
                                        {submitted && !form.inn && <span className={styles.not_filled_warning}>Введите данные</span>}
                                    </div>
                                    <div>
                                        <input
                                            value={form.kpp || ''}
                                            onChange={e => setForm({ ...form, kpp: e.target.value })}
                                            className={styles.input}
                                            placeholder="КПП"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {form.orgType === 'Для физических лиц' && (
                            <input
                                value={form.inn || ''}
                                onChange={e => setForm({ ...form, inn: e.target.value })}
                                className={styles.input}
                                placeholder="ИНН (Личный)"
                            />
                        )}

                        {form.orgType !== 'Для физических лиц' && (
                            <input
                                value={form.orgType === 'Для ИП' ? form.ogrnip : form.ogrn || ''}
                                onChange={e => form.orgType === 'Для ИП' ? setForm({ ...form, ogrnip: e.target.value }) : setForm({ ...form, ogrn: e.target.value })}
                                className={styles.input}
                                placeholder={form.orgType === 'Для ИП' ? "ОГРНИП" : "ОГРН"}
                            />
                        )}

                        {form.orgType !== 'Для физических лиц' && (
                            <>
                                <input value={form.bank || ''} onChange={e => setForm({ ...form, bank: e.target.value })} className={styles.input} placeholder="Банк" />
                                <input value={form.bank_schet || ''} onChange={e => setForm({ ...form, bank_schet: e.target.value })} className={styles.input} placeholder="Расчетный счет" />
                                <input value={form.korr_schet || ''} onChange={e => setForm({ ...form, korr_schet: e.target.value })} className={styles.input} placeholder="Корреспондентский счет" />
                                <input value={form.bik || ''} onChange={e => setForm({ ...form, bik: e.target.value })} className={styles.input} placeholder="БИК" />
                                <input value={form.jurAddr || ''} onChange={e => setForm({ ...form, jurAddr: e.target.value })} className={styles.input} placeholder="Юридический адрес" />
                            </>
                        )}

                        {form.orgType === 'Для физических лиц' && (
                            <input value={form.pasp || ''} onChange={e => setForm({ ...form, pasp: e.target.value })} className={styles.input} placeholder="Серия, номер паспорта" />
                        )}

                        <input
                            value={form.postAddr || ''}
                            onChange={e => setForm({ ...form, postAddr: e.target.value })}
                            className={`${styles.input} ${submitted && !form.postAddr && styles.not_filled}`}
                            placeholder="Почтовый адрес"
                        />
                        {submitted && !form.postAddr && <span className={styles.not_filled_warning}>Введите данные</span>}

                        {form.faktAddr && form.faktAddr.map((addr: string, i: number) => (
                            <div key={i} className={styles.address_group}>
                                <input
                                    value={addr}
                                    onChange={e => handleAddressChange(e.target.value, i)}
                                    className={`${styles.input} ${submitted && !addr && styles.not_filled}`}
                                    placeholder="Фактический адрес для вывоза"
                                />
                                {i > 0 || form.faktAddr.length > 1 ? (
                                    <button type="button" onClick={() => handleRemoveAddress(i)} className={styles.remove_btn}><FaTrash /> Удалить</button>
                                ) : (
                                    <button type="button" onClick={handleAddAddress} className={styles.add_btn}><FaPlus /> Добавить</button>
                                )}
                            </div>
                        ))}

                        <Select
                            value={form.wasteType || ''}
                            onChange={(val) => setForm({ ...form, wasteType: val })}
                            options={wasteTypes}
                            placeholder="Вид отходов"
                            className={submitted && !form.wasteType ? styles.not_filled : ''}
                        />
                        {submitted && !form.wasteType && <span className={styles.not_filled_warning}>Выберите значение</span>}

                        <Select
                            value={form.usluga || ''}
                            onChange={(val) => setForm({ ...form, usluga: val })}
                            options={serviceTypes}
                            placeholder="Вид услуги"
                            className={submitted && !form.usluga ? styles.not_filled : ''}
                        />
                        {submitted && !form.usluga && <span className={styles.not_filled_warning}>Выберите значение</span>}

                        <div className={styles.radios}>
                            <h4 className={styles.radio_label}>Способ расчета</h4>
                            <label className={styles.radio}>
                                <span>Оплата по нормативам</span>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={form.payment === 'Оплата по нормативам'}
                                    onChange={() => handlePaymentChange('norm')}
                                />
                            </label>
                            <label className={styles.radio}>
                                <span>Оплата по контейнерам</span>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={form.payment === 'Оплата по контейнерам'}
                                    onChange={() => handlePaymentChange('kont')}
                                />
                            </label>
                        </div>

                        {form.payment === 'Оплата по нормативам' ? (
                            <>
                                <Select
                                    value={form.orgIs || ''}
                                    onChange={(val) => setForm({ ...form, orgIs: val, normativ: { title: '', value: '' } })}
                                    options={orgs}
                                    placeholder="Тип организации"
                                    className={submitted && !form.orgIs ? styles.not_filled : ''}
                                />

                                <input
                                    value={form.normativ?.value || ''}
                                    onChange={e => setForm({ ...form, normativ: { ...form.normativ, value: e.target.value } })}
                                    className={`${styles.input} ${submitted && !form.normativ?.value && styles.not_filled}`}
                                    placeholder={currentNorm ? currentNorm[1] : 'Выберите тип организации'}
                                    disabled={!form.orgIs}
                                />
                            </>
                        ) : (
                            <div className={styles.inn_kpp}>
                                <input
                                    value={form.kont_count || ''}
                                    onChange={e => setForm({ ...form, kont_count: e.target.value })}
                                    className={styles.input}
                                    placeholder="Количество контейнеров"
                                />
                                <input
                                    value={form.m3 || ''}
                                    onChange={e => setForm({ ...form, m3: e.target.value })}
                                    className={styles.input}
                                    placeholder="Объем (м3)"
                                />
                            </div>
                        )}
                    </>
                )}

                <input
                    value={form.dolzhn || ''}
                    onChange={e => setForm({ ...form, dolzhn: e.target.value })}
                    className={styles.input}
                    placeholder="Представитель (ФИО, должность)"
                />

                <input
                    value={form.phoneNumber || ''}
                    onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
                    className={`${styles.input} ${submitted && !form.phoneNumber && styles.not_filled}`}
                    placeholder="Телефон: +7 (999) 000-00-00"
                />
                {submitted && !form.phoneNumber && <span className={styles.not_filled_warning}>Введите данные</span>}

                <input
                    value={form.email || ''}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={`${styles.input} ${submitted && !form.email && styles.not_filled}`}
                    placeholder="Email"
                    type="email"
                />
                {submitted && !form.email && <span className={styles.not_filled_warning}>Введите данные</span>}

                <textarea
                    value={form.comment || ''}
                    onChange={e => setForm({ ...form, comment: e.target.value })}
                    className={styles.textarea}
                    placeholder={isSub ? 'Какие изменения Вы хотите внести?' : 'Комментарий'}
                />

                <div className={styles.files_section}>
                    <label className={styles.upload_label}>
                        {form.orgType === 'Для физических лиц'
                            ? 'Прикрепите паспортные данные, ИНН, документы на собственность'
                            : 'Прикрепите карточку организации, копии ИНН, ОГРН, документы на помещение'
                        }
                    </label>
                    <label className={styles.upload_area}>
                        <input type="file" multiple onChange={handleUpload} style={{ display: 'none' }} />
                        <span className={styles.upload_text}><FaPlus /> Выбрать файлы</span>
                    </label>
                    <div className={styles.file_list}>
                        {files.map((file, i) => (
                            <div key={i} className={styles.file_item}>
                                <FaFileAlt />
                                <div>
                                    <div className={styles.file_name}>{file.name}</div>
                                    <div className={styles.file_size}>{Math.round(file.size / 1024)} KB</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.form_footer}>
                    <label className={styles.checkbox}>
                        <input type="checkbox" checked={signed} onChange={() => setSigned(!signed)} />
                        <span>Нажимая кнопку, я даю согласие на обработку моих персональных данных</span>
                    </label>

                    <button type="submit" disabled={!signed} className={styles.submit_btn}>
                        {isSub ? 'Оставить заявку на доп. соглашение' : 'Оставить заявку на договор'}
                    </button>

                    {warning && <span className={styles.warning}><FaExclamationCircle /> Прикрепите необходимые файлы</span>}
                </div>
            </form>
        </div>
    );
};
