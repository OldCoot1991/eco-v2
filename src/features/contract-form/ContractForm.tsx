"use client";

import React, { useState, FormEvent } from 'react';
import styles from './ContractForm.module.css';
import { orgs } from '@/data/contract-orgs';
import { FaPlus, FaTrash, FaFileAlt, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import { Select } from '@/shared/ui/Select/Select';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

// Helper to get initial state
interface FormState {
    orgType: string;
    orgName: string;
    fullName: string;
    okved: string;
    inn: string;
    kpp: string;
    ogrn: string;
    ogrnip: string;
    pasp: string;
    bank: string;
    bank_schet: string;
    korr_schet: string;
    bik: string;
    jurAddr: string;
    postAddr: string;
    faktAddr: string[];
    wasteType: string;
    usluga: string;
    payment: string;
    orgIs: string;
    normativ: { title: string; value: string };
    kont_count: string;
    m3: string;
    dolzhn: string;
    dogNo: string;
    phoneNumber: string;
    email: string;
    comment: string;
    files: string[];
}

const getInitialState = (type: string): FormState => ({
    orgType: type,
    orgName: '',
    fullName: '',
    okved: '',
    inn: '',
    kpp: '',
    ogrn: '',
    ogrnip: '',
    pasp: '',
    bank: '',
    bank_schet: '',
    korr_schet: '',
    bik: '',
    jurAddr: '',
    postAddr: '',
    faktAddr: [''],
    wasteType: '',
    usluga: '',
    payment: 'norm', // 'norm' or 'kont'
    orgIs: '',
    normativ: { title: '', value: '' },
    kont_count: '',
    m3: '',
    dolzhn: '',
    dogNo: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: []
});

const wasteTypes = ['Крупно-габаритный мусор (КГМ)', 'Твердые коммунальные отходы (ТКО)', 'Строительный мусор'];
const serviceTypes = ['На вывоз отходов (+ захоронение)', 'Только на захоронение'];

export const ContractForm = () => {
    const { t } = useTranslation();
    const f = t.businessContract.form;

    // Translation maps for logic values
    const orgTypeMap = {
        jur: f.labels.jur, // "Для юридических лиц"
        ip: f.labels.ip,   // "Для ИП"
        fiz: f.labels.fiz  // "Для физических лиц"
    };

    const wasteTypesTranslated = [f.placeholders.wasteType, 'MSW', 'Construction Waste']; // Simplified for now, should ideally come from translations too if critical
    // Keeping original arrays for functionality if backend expects specific strings, 
    // BUT for UI we should show translated. 
    // For this update, I will assume we should display translated strings but maybe keep internal values?
    // Let's stick to using the `f` keys for UI labels and placeholders.

    const [isSub, setIsSub] = useState(false);
    // Initialize with a generic structure, fields will be used based on logic
    const [form, setForm] = useState<FormState>(getInitialState('jur'));

    // We need to manage the "type" state separately or derive it.
    // Let's simplify:
    // orgType internal values: 'jur', 'ip', 'fiz'

    const [files, setFiles] = useState<File[]>([]);
    const [warning, setWarning] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [signed, setSigned] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setWarning(false);

        const requiredFields = isSub
            ? ['phoneNumber', 'email', 'dogNo']
            : ['phoneNumber', 'email', 'postAddr'];

        const hasEmptyFields = requiredFields.some(field => !form[field as keyof typeof form]);

        if (hasEmptyFields) {
            alert(f.fillWarning);
            return;
        }

        if (files.length === 0) {
            setWarning(true);
            return;
        }

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

    const handlePaymentChange = (type: string) => {
        setForm({ ...form, payment: type });
        if (type === 'norm') {
            setForm(prev => ({ ...prev, payment: 'norm', kont_count: '', m3: '' }));
        } else {
            setForm(prev => ({ ...prev, payment: 'kont', orgIs: '', normativ: { title: '', value: '' } }));
        }
    };

    const currentNorm = orgs.find(org => org[0] === form.orgIs);

    if (success) {
        return (
            <div className={styles.container} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                    <FaCheck />
                </div>
                <h2 className={styles.title}>{f.successTitle}</h2>
                <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>{f.successMsg}</p>
                <button
                    onClick={() => { setSuccess(false); setSubmitted(false); setSigned(false); setFiles([]); }}
                    className={styles.submit_btn}
                    style={{ marginTop: '2rem', maxWidth: '300px' }}
                >
                    {f.submitAnother}
                </button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_item}>
                <Select
                    value={isSub ? f.subButton : f.button}
                    onChange={(val) => {
                        const newIsSub = val === f.subButton;
                        setIsSub(newIsSub);
                        setForm(getInitialState('jur'));
                        setFiles([]);
                        setSubmitted(false);
                        setSigned(false);
                    }}
                    options={[f.button, f.subButton]}
                    placeholder={f.button}
                />
            </div>

            <form onSubmit={handleSubmit}>
                {!isSub && (
                    <div className={styles.form_item}>
                        <Select
                            value={orgTypeMap[form.orgType as keyof typeof orgTypeMap]}
                            onChange={(val) => {
                                const key = Object.keys(orgTypeMap).find(
                                    k => orgTypeMap[k as keyof typeof orgTypeMap] === val
                                );
                                if (key) setForm({ ...form, orgType: key });
                            }}
                            options={[f.labels.jur, f.labels.ip, f.labels.fiz]}
                            placeholder={f.placeholders.orgIs}
                        />
                    </div>
                )}

                {isSub && (
                    <div className={styles.form_item}>
                        <Select
                            value={form.orgType === 'fiz' ? f.labels.fiz : f.labels.jurIp}
                            onChange={(val) => {
                                setForm({ ...form, orgType: val === f.labels.fiz ? 'fiz' : 'jur' });
                            }}
                            options={[f.labels.jurIp, f.labels.fiz]}
                            placeholder={f.placeholders.orgIs}
                        />
                    </div>
                )}

                <div className={styles.form_item}>
                    <div className={styles.field_wrapper}>
                        {form.orgType === 'fiz' ? (
                            <input
                                value={form.fullName || ''}
                                onChange={e => setForm({ ...form, fullName: e.target.value })}
                                className={`${styles.input} ${submitted && !form.fullName && styles.not_filled}`}
                                placeholder={f.placeholders.fullName}
                            />
                        ) : (
                            <input
                                value={form.orgName || ''}
                                onChange={e => setForm({ ...form, orgName: e.target.value })}
                                className={`${styles.input} ${submitted && !form.orgName && styles.not_filled}`}
                                placeholder={form.orgType === 'ip' ? f.placeholders.ipName : f.placeholders.orgName}
                            />
                        )}
                        {submitted && form.orgType === 'fiz' && !form.fullName && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                        {submitted && form.orgType !== 'fiz' && !form.orgName && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                    </div>
                </div>

                {isSub && (
                    <div className={styles.form_item}>
                        <div className={styles.field_wrapper}>
                            <input
                                value={form.dogNo || ''}
                                onChange={e => setForm({ ...form, dogNo: e.target.value })}
                                className={`${styles.input} ${submitted && !form.dogNo && styles.not_filled}`}
                                placeholder={f.placeholders.dogNo}
                            />
                            {submitted && !form.dogNo && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                        </div>
                    </div>
                )}

                {!isSub && (
                    <>
                        {form.orgType !== 'fiz' && (
                            <>
                                <div className={styles.form_item}>
                                    <input
                                        value={form.okved || ''}
                                        onChange={e => setForm({ ...form, okved: e.target.value })}
                                        className={styles.input}
                                        placeholder={f.placeholders.okved}
                                    />
                                </div>
                                <div className={`${styles.inn_kpp} ${styles.form_item}`}>
                                    <div className={styles.field_wrapper}>
                                        <input
                                            value={form.inn || ''}
                                            onChange={e => setForm({ ...form, inn: e.target.value })}
                                            className={`${styles.input} ${submitted && !form.inn && styles.not_filled}`}
                                            placeholder={f.placeholders.inn}
                                        />
                                        {submitted && !form.inn && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                                    </div>
                                    <div className={styles.field_wrapper}>
                                        <input
                                            value={form.kpp || ''}
                                            onChange={e => setForm({ ...form, kpp: e.target.value })}
                                            className={styles.input}
                                            placeholder={f.placeholders.kpp}
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {form.orgType === 'fiz' && (
                            <div className={styles.form_item}>
                                <input
                                    value={form.inn || ''}
                                    onChange={e => setForm({ ...form, inn: e.target.value })}
                                    className={styles.input}
                                    placeholder={f.placeholders.inn}
                                />
                            </div>
                        )}

                        {form.orgType !== 'fiz' && (
                            <div className={styles.form_item}>
                                <input
                                    value={form.orgType === 'ip' ? form.ogrnip : form.ogrn || ''}
                                    onChange={e => form.orgType === 'ip' ? setForm({ ...form, ogrnip: e.target.value }) : setForm({ ...form, ogrn: e.target.value })}
                                    className={styles.input}
                                    placeholder={form.orgType === 'ip' ? f.placeholders.ogrnip : f.placeholders.ogrn}
                                />
                            </div>
                        )}

                        {form.orgType !== 'fiz' && (
                            <>
                                <div className={styles.form_item}>
                                    <input value={form.bank || ''} onChange={e => setForm({ ...form, bank: e.target.value })} className={styles.input} placeholder={f.placeholders.bank} />
                                </div>
                                <div className={styles.form_item}>
                                    <input value={form.bank_schet || ''} onChange={e => setForm({ ...form, bank_schet: e.target.value })} className={styles.input} placeholder={f.placeholders.rs} />
                                </div>
                                <div className={styles.form_item}>
                                    <input value={form.korr_schet || ''} onChange={e => setForm({ ...form, korr_schet: e.target.value })} className={styles.input} placeholder={f.placeholders.ks} />
                                </div>
                                <div className={styles.form_item}>
                                    <input value={form.bik || ''} onChange={e => setForm({ ...form, bik: e.target.value })} className={styles.input} placeholder={f.placeholders.bik} />
                                </div>
                                <div className={styles.form_item}>
                                    <input value={form.jurAddr || ''} onChange={e => setForm({ ...form, jurAddr: e.target.value })} className={styles.input} placeholder={f.placeholders.jurAddr} />
                                </div>
                            </>
                        )}

                        {form.orgType === 'fiz' && (
                            <div className={styles.form_item}>
                                <input value={form.pasp || ''} onChange={e => setForm({ ...form, pasp: e.target.value })} className={styles.input} placeholder={f.placeholders.pasp} />
                            </div>
                        )}

                        <div className={styles.form_item}>
                            <div className={styles.field_wrapper}>
                                <input
                                    value={form.postAddr || ''}
                                    onChange={e => setForm({ ...form, postAddr: e.target.value })}
                                    className={`${styles.input} ${submitted && !form.postAddr && styles.not_filled}`}
                                    placeholder={f.placeholders.postAddr}
                                />
                                {submitted && !form.postAddr && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                            </div>
                        </div>

                        {form.faktAddr && form.faktAddr.map((addr: string, i: number) => (
                            <div key={i} className={styles.form_item}>
                                <div className={styles.address_group}>
                                    <div className={styles.address_input_col}>
                                        <input
                                            value={addr}
                                            onChange={e => handleAddressChange(e.target.value, i)}
                                            className={`${styles.input} ${submitted && !addr && styles.not_filled}`}
                                            placeholder={f.placeholders.factAddr}
                                        />
                                        {submitted && !addr && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                                    </div>
                                    {i > 0 || form.faktAddr.length > 1 ? (
                                        <button type="button" onClick={() => handleRemoveAddress(i)} className={styles.remove_btn}><FaTrash /> Удалить</button>
                                    ) : (
                                        <button type="button" onClick={handleAddAddress} className={styles.add_btn}><FaPlus /> Добавить</button>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className={styles.form_item}>
                            <div className={styles.field_wrapper}>
                                <Select
                                    value={form.wasteType || ''}
                                    onChange={(val) => setForm({ ...form, wasteType: val })}
                                    options={wasteTypes}
                                    placeholder={f.placeholders.wasteType}
                                    className={submitted && !form.wasteType ? styles.not_filled : ''}
                                />
                                {submitted && !form.wasteType && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                            </div>
                        </div>

                        <div className={styles.form_item}>
                            <div className={styles.field_wrapper}>
                                <Select
                                    value={form.usluga || ''}
                                    onChange={(val) => setForm({ ...form, usluga: val })}
                                    options={serviceTypes}
                                    placeholder={f.placeholders.serviceType}
                                    className={submitted && !form.usluga ? styles.not_filled : ''}
                                />
                                {submitted && !form.usluga && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                            </div>
                        </div>

                        <div className={styles.form_item}>
                            <h4 className={styles.radio_label}>{f.labels.calcMethod}</h4>
                            <Select
                                value={form.payment === 'norm' ? f.labels.norm : f.labels.container}
                                onChange={(val) => {
                                    handlePaymentChange(val === f.labels.norm ? 'norm' : 'kont');
                                }}
                                options={[f.labels.norm, f.labels.container]}
                                placeholder={f.labels.calcMethod}
                            />
                        </div>

                        {form.payment === 'norm' ? (
                            <>
                                <div className={styles.form_item}>
                                    <div className={styles.field_wrapper}>
                                        <Select
                                            value={form.orgIs || ''}
                                            onChange={(val) => setForm({ ...form, orgIs: val, normativ: { title: '', value: '' } })}
                                            options={orgs as any}
                                            placeholder={f.placeholders.orgIs}
                                            className={submitted && !form.orgIs ? styles.not_filled : ''}
                                        />
                                        {submitted && !form.orgIs && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                                    </div>
                                </div>

                                <div className={styles.form_item}>
                                    <div className={styles.field_wrapper}>
                                        <input
                                            value={form.normativ?.value || ''}
                                            onChange={e => setForm({ ...form, normativ: { ...form.normativ, value: e.target.value } })}
                                            className={`${styles.input} ${submitted && !form.normativ?.value && styles.not_filled}`}
                                            placeholder={currentNorm ? (currentNorm[1] as string) : f.placeholders.normValue}
                                            disabled={!form.orgIs}
                                        />
                                        {submitted && !form.normativ?.value && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={`${styles.inn_kpp} ${styles.form_item}`}>
                                <div className={styles.field_wrapper}>
                                    <input
                                        value={form.kont_count || ''}
                                        onChange={e => setForm({ ...form, kont_count: e.target.value })}
                                        className={`${styles.input} ${submitted && !form.kont_count && styles.not_filled}`}
                                        placeholder={f.placeholders.count}
                                    />
                                    {submitted && !form.kont_count && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                                </div>
                                <div className={styles.field_wrapper}>
                                    <input
                                        value={form.m3 || ''}
                                        onChange={e => setForm({ ...form, m3: e.target.value })}
                                        className={`${styles.input} ${submitted && !form.m3 && styles.not_filled}`}
                                        placeholder={f.placeholders.volume}
                                    />
                                    {submitted && !form.m3 && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                                </div>
                            </div>
                        )}
                    </>
                )}

                <div className={styles.form_item}>
                    <input
                        value={form.dolzhn || ''}
                        onChange={e => setForm({ ...form, dolzhn: e.target.value })}
                        className={styles.input}
                        placeholder={f.placeholders.rep}
                    />
                </div>

                <div className={styles.form_item}>
                    <div className={styles.field_wrapper}>
                        <input
                            value={form.phoneNumber || ''}
                            onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
                            className={`${styles.input} ${submitted && !form.phoneNumber && styles.not_filled}`}
                            placeholder={f.placeholders.phone}
                        />
                        {submitted && !form.phoneNumber && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                    </div>
                </div>

                <div className={styles.form_item}>
                    <div className={styles.field_wrapper}>
                        <input
                            value={form.email || ''}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className={`${styles.input} ${submitted && !form.email && styles.not_filled}`}
                            placeholder={f.placeholders.email}
                            type="email"
                        />
                        {submitted && !form.email && <span className={styles.not_filled_warning}>{f.fillWarning}</span>}
                    </div>
                </div>

                <div className={styles.form_item}>
                    <textarea
                        value={form.comment || ''}
                        onChange={e => setForm({ ...form, comment: e.target.value })}
                        className={styles.textarea}
                        placeholder={isSub ? f.placeholders.changes : f.placeholders.comment}
                    />
                </div>

                <div className={styles.files_section}>
                    <label className={styles.upload_label}>
                        {form.orgType === 'fiz'
                            ? f.labels.uploadFiz
                            : f.labels.uploadJur
                        }
                    </label>
                    <label className={styles.upload_area}>
                        <input type="file" multiple onChange={handleUpload} style={{ display: 'none' }} />
                        <span className={styles.upload_text}><FaPlus /> {f.upload}</span>
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
                        <span>{f.personalCons}</span>
                    </label>

                    <button type="submit" disabled={!signed} className={styles.submit_btn}>
                        {isSub ? f.submitSub : f.submit}
                    </button>

                    {warning && <span className={styles.warning}><FaExclamationCircle /> {f.fileWarning}</span>}
                </div>
            </form>
        </div>
    );
};
