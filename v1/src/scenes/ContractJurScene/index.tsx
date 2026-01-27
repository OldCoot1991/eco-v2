import { FormEvent, useState } from "react"
import styles from './contracts.module.css'
import { Route, Switch, useHistory, useLocation } from "react-router"
import NumberFormat from "react-number-format"
import Select from "../../components/Select"
import docIcon from '../../assets/doc_icon.png'
import checkedIcon from '../../assets/checked.png'
import { orgs } from "../Feedback/orgs"
import axios from "axios"
import { Link } from "react-router-dom"
import policy from '../../assets/docs/policy.pdf'
import EcoMobileAppBanner from "../../components/EcoMobileAppBanner"

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
    faktAddr: [],
    wasteType: '',
    usluga: '',
    payment: 'Оплата по нормативам',
    orgIs: '',
    normativ: { title: '', value: '' },
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: []
}


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
    faktAddr: '',
    wasteType: '',
    usluga: '',
    payment: 'Оплата по нормативам',
    orgIs: '',
    normativ: { title: '', value: '' },
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: []
}

const forFiz = {
    orgType: 'Для физических лиц',
    fullName: '',
    inn: '',
    pasp: '',
    postAddr: '',
    faktAddr: '',
    wasteType: '',
    usluga: '',
    payment: 'Оплата по нормативам',
    dolzhn: '',
    orgIs: '',
    normativ: { title: '', value: '' },
    phoneNumber: '',
    email: '',
    comment: '',
    files: []
}

const normPayment = {
    orgIs: '',
    normativ: { title: '', value: '' },
}

const kontPayment = {
    kont_count: '',
    m3: '',
}

const subAgreement = {
    orgType: 'Для юридических лиц',
    orgName: '',
    dogNo: '',
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: []
}

const subAgreementFiz = {
    orgType: 'Для физических лиц',
    fullName: '',
    dogNo: '',
    dolzhn: '',
    phoneNumber: '',
    email: '',
    comment: '',
    files: []
}
// Бизнесу: Заключить договор
export default function ContractJurScene() {
    const { pathname } = useLocation()
    const isSub = pathname === '/jur/contract/sub'
    const [form, setForm] = useState(isSub ? subAgreement : forJur)

    return (
        <Switch>
            <Route path="/jur/contract/sub">
                <ContractForm isSub={isSub} form={form} setForm={setForm} />
            </Route>
            <Route path="/jur/contract/done">
                <h1 className={styles.title}>Спасибо за Вашу заявку! <br />
                    Наши специалисты свяжутся с Вами в ближайшее время.
                </h1>
                <EcoMobileAppBanner />
            </Route>
            <Route path="/jur/contract">
                <ContractForm isSub={isSub} form={form} setForm={setForm} />
            </Route>
        </Switch>
    )
}

function ContractForm({ form, setForm, isSub }: { form: any, setForm: any, isSub: boolean }) {
    const history = useHistory()
    const [addressInputs, setAddressInputs] = useState<any>([''])
    const [signed, setSigned] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const [warning, setWarning] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const { pathname } = useLocation()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setSubmitted(true)
        if (Object.keys(form).some(field => form[field] === '')) {
            return
        }

        if (files.length === 0) {
            setWarning(true)
            return
        }

        if (form.phoneNumber.length === 17) { // Узнаём полностью ли введен номер
            let formData = new FormData()
            files.forEach(file => {
                formData.append('files', file)
            })
            formData.append('form', JSON.stringify(form))
            formData.append('contractType', `${isSub ? 'sub' : 'main'}`)
            axios.post('/api/contract/send', formData).then(res => {
                res.status === 200 && history.push('/jur/contract/done');
                window.scrollTo(0, 0)
            }).catch(err => alert("Произошла ошибка, повторите позднее"))
        } else {
            alert("Введите номер телефона полностью")
        }

    }

    const handleAddAddress = () => {
        setAddressInputs([...addressInputs, ''])
    }
    const handleRemoveAddress = (i: any) => {
        let newInputs = [...addressInputs]
        newInputs.splice(i, 1)
        setAddressInputs(newInputs)
    }
    const handleAddressChange = (e: any, i: any) => {
        let newInputs: any = [...addressInputs]
        newInputs[i] = e.target.value
        setAddressInputs(newInputs)
        setForm({ ...form, faktAddr: newInputs })
    }

    const handleUpload = (e: any) => {
        let newFiles: any = Array.from(e.target.files)
        setFiles(files.concat([...newFiles]))
        let fileNames: any = Array.from(e.target.files).map((f: any) => f.name)
        setForm({ ...form, files: fileNames })
    }

    const handlePaymentChange = (payment: string) => {
        if (payment === 'norm') {
            let { kont_count, m3, ...newForm } = form
            setForm({ ...newForm, ...normPayment, payment: 'Оплата по нормативам' })
        } else {
            let { orgIs, normativ, ...newForm } = form
            setForm({ ...newForm, ...kontPayment, payment: 'Оплата по контейнерам' })
        }
    }

    let currentNorm: any = orgs.find(org => org[0] == form.orgIs)

    return (
        <div>
            <div className={styles.nav__container}>
            {pathname.match('/jur/contract') &&
                    <nav className={styles.nav__menu}>
                                <Link className={`${styles.nav__menu_link} ${pathname === '/jur/contract' && styles.nav__menu_link_active}`} to={'/jur/contract'}>Заключить договор на вывоз мусора</Link>
                                <Link className={`${styles.nav__menu_link} ${pathname === '/jur/contract/sub' && styles.nav__menu_link_active}`} to={'/jur/contract/sub'}>Заключить дополнительное соглашение</Link>
                    </nav>
                }
            </div>

            < div className={styles.container} >
            <h1 className={styles.title}>{isSub ? 'Заключить дополнительное соглашение' : 'Заключить договор на вывоз мусора'}</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.radios}>
                    <label className={styles.radio}>
                        Для юридических лиц
                        <input onChange={() => isSub ? setForm(subAgreement) : setForm(forJur)} defaultChecked type="radio" name="is" />
                    </label>
                    <label className={styles.radio}>
                        Для ИП
                        <input onChange={() => isSub ? setForm(subAgreement) : setForm(forIP)} type="radio" name="is" />
                    </label>
                    <label className={styles.radio}>
                        Для физических лиц
                        <input onChange={() => isSub ? setForm(subAgreementFiz) : setForm(forFiz)} type="radio" name="is" />
                    </label>
                </div>

                {form.orgType === 'Для физических лиц' ?
                    <>
                        <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={`${styles.input} ${submitted && form.fullName === '' && styles.not_filled}`} placeholder={'Ф.И.О.'} />
                        <span className={`${styles.not_filled_warning} ${submitted && form.fullName === '' && styles.not_filled}`}>Введите данные</span>
                    </>
                    :
                    <> <input value={form.orgName} onChange={(e) => setForm({ ...form, orgName: e.target.value })} className={`${styles.input} ${submitted && form.orgName === '' && styles.not_filled}`} placeholder={`Наименование ${form.orgType === 'Для ИП' ? 'ИП' : 'организации'}`} />
                        <span className={`${styles.not_filled_warning} ${submitted && form.orgName === '' && styles.not_filled}`}>Введите данные</span>
                    </>
                }
                {isSub &&
                    <>
                        <input value={form.dogNo} onChange={(e) => setForm({ ...form, dogNo: e.target.value })} className={`${styles.input} ${submitted && form.dogNo === '' && styles.not_filled}`} placeholder={`Номер договора`} />
                        <span className={`${styles.not_filled_warning} ${submitted && form.dogNo === '' && styles.not_filled}`}>Введите данные</span>
                    </>
                }
                {!isSub && <>

                    {form.orgType !== 'Для физических лиц' &&
                        <div>
                            <input value={form.okved} onChange={(e) => setForm({ ...form, okved: e.target.value })} className={`${styles.input} ${submitted && form.okved === '' && styles.not_filled}`} placeholder="Вид деятельности, ОКВЭД" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.okved === '' && styles.not_filled}`}>Введите данные</span>
                        </div>
                    }

                    {form.orgType === 'Для физических лиц' ?
                        <>
                            <input value={form.inn} className={`${styles.input} ${submitted && form.inn === '' && styles.not_filled}`} onChange={(e: any) => setForm({ ...form, inn: e.target.value })} type="text" placeholder="ИНН (Личный)" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.inn === '' && styles.not_filled}`}>Введите данные</span>
                        </>
                        :
                        <div className={styles.inn_kpp}>
                            <div>
                                <input value={form.inn} className={`${submitted && form.inn === '' && styles.not_filled}`} onChange={(e: any) => setForm({ ...form, inn: e.target.value })} type="text" placeholder="ИНН" />
                                <span className={`${styles.not_filled_warning} ${submitted && form.inn === '' && styles.not_filled}`}>Введите данные</span>
                            </div>

                            <div>
                                <input value={form.kpp} className={`${submitted && form.kpp === '' && styles.not_filled}`} onChange={(e: any) => setForm({ ...form, kpp: e.target.value })} type="" placeholder="КПП" />
                                <span className={`${styles.not_filled_warning} ${submitted && form.kpp === '' && styles.not_filled}`}>Введите данные</span>
                            </div>

                        </div>
                    }

                    {form.orgType !== 'Для физических лиц' &&
                        (form.orgType === 'Для ИП' ?
                            <>
                                <input value={form.ogrnip} onChange={(e) => setForm({ ...form, ogrnip: e.target.value })} className={`${styles.input} ${submitted && form.ogrnip === '' && styles.not_filled}`} placeholder="ОГРНИП" />
                                <span className={`${styles.not_filled_warning} ${submitted && form.ogrnip === '' && styles.not_filled}`}>Введите данные</span>
                            </>
                            :
                            <>
                                <input value={form.ogrn} onChange={(e) => setForm({ ...form, ogrn: e.target.value })} className={`${styles.input} ${submitted && form.ogrn === '' && styles.not_filled}`} placeholder="ОГРН" />
                                <span className={`${styles.not_filled_warning} ${submitted && form.ogrn === '' && styles.not_filled}`}>Введите данные</span>
                            </>
                        )
                    }

                    {form.orgType !== 'Для физических лиц' &&
                        <>
                            <input value={form.bank} onChange={(e) => setForm({ ...form, bank: e.target.value })} className={`${styles.input} ${submitted && form.bank === '' && styles.not_filled}`} placeholder="Банк (Пример: Ставропольское отделение No5230, ПАО Сбербанк, г. Ставрополь)" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.bank === '' && styles.not_filled}`}>Введите данные</span>

                            <input value={form.bank_schet} onChange={(e) => setForm({ ...form, bank_schet: e.target.value })} className={`${styles.input} ${submitted && form.bank_schet === '' && styles.not_filled}`} placeholder="Расчетный счет" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.bank_schet === '' && styles.not_filled}`}>Введите данные</span>

                            <input value={form.korr_schet} onChange={(e) => setForm({ ...form, korr_schet: e.target.value })} className={`${styles.input} ${submitted && form.korr_schet === '' && styles.not_filled}`} placeholder="Корреспондентский счет" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.korr_schet === '' && styles.not_filled}`}>Введите данные</span>

                            <input value={form.bik} onChange={(e) => setForm({ ...form, bik: e.target.value })} className={`${styles.input} ${submitted && form.bik === '' && styles.not_filled}`} placeholder="БИК" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.bik === '' && styles.not_filled}`}>Введите данные</span>

                            <input value={form.jurAddr} onChange={(e) => setForm({ ...form, jurAddr: e.target.value })} className={`${styles.input} ${submitted && form.jurAddr === '' && styles.not_filled}`} placeholder="Юридический адрес" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.jurAddr === '' && styles.not_filled}`}>Введите данные</span>
                        </>
                    }

                    {form.orgType === 'Для физических лиц' &&
                        <>
                            <input value={form.pasp} onChange={(e) => setForm({ ...form, pasp: e.target.value })} className={`${styles.input} ${submitted && form.pasp === '' && styles.not_filled}`} placeholder="Серия, номер паспорта" />
                            <span className={`${styles.not_filled_warning} ${submitted && form.pasp === '' && styles.not_filled}`}>Введите данные</span>
                        </>
                    }

                    <input value={form.postAddr} onChange={(e) => setForm({ ...form, postAddr: e.target.value })} className={`${styles.input} ${submitted && form.postAddr === '' && styles.not_filled}`} placeholder="Почтовый адрес" />
                    <span className={`${styles.not_filled_warning} ${submitted && form.postAddr === '' && styles.not_filled}`}>Введите данные</span>

                    {
                        addressInputs.map((v: any, i: any) => {
                            return (
                                <div className={styles["address-group"]}>
                                    <input className={`${styles.input} ${submitted && addressInputs[i] === '' && styles.not_filled}`} onChange={(e) => handleAddressChange(e, i)} type="text" placeholder="Фактический адрес для вывоза" />
                                    {
                                        i >= 1 ? (
                                            <div onClick={() => handleRemoveAddress(i)} className={`${styles["address-group-button"]} `}> <span className={styles.icon}>➖</span> Удалить адрес</div>
                                        ) : (
                                            <div onClick={handleAddAddress} className={`${styles["address-group-button"]} `}> <span className={styles.icon}>➕</span> Добавить адрес</div>
                                        )
                                    } <span className={`${styles.not_filled_warning} ${submitted && addressInputs[i] === '' && styles.not_filled}`}>Введите данные</span> </div>
                            )
                        })
                    }
                    <Select submitted={submitted} onChange={(value: string) => setForm({ ...form, wasteType: value })} title="Вид отходов"
                        options={['Крупно-габаритный мусор (КГМ)', 'Твердые коммунальные отходы (ТКО)', 'Строительный мусор']} />
                    <span className={`${styles.not_filled_warning} ${submitted && form.wasteType === '' && styles.not_filled}`}>Введите данные</span>

                    <Select submitted={submitted} onChange={(value: string) => setForm({ ...form, usluga: value })} title="Вид услуги"
                        options={['На вывоз отходов (+ захоронение)', 'Только на захоронение']} />
                    <span className={`${styles.not_filled_warning} ${submitted && form.usluga === '' && styles.not_filled}`}>Введите данные</span>

                    <div className={styles.radios}>
                        <span className={styles.radio_label}>Способы расчета оплаты</span>
                        <label className={styles.radio}>
                            Оплата по нормативам
                            <input onChange={() => handlePaymentChange('norm')} defaultChecked type="radio" name="payment" />
                        </label>
                        <label className={styles.radio}>
                            <div className={styles.radio_desc}>
                                <span>Оплата по контейнерам</span>
                                <span>
                                    Вы можете поставить свои контейнеры
                                    и производить оплату в расчете на кол-во
                                    и объем контейнеров
                                </span>
                            </div>
                            <input onChange={() => handlePaymentChange('kont')} type="radio" name="payment" />
                        </label>
                    </div>

                    {form.payment === 'Оплата по нормативам' ?
                        <>
                            <Select submitted={submitted} onChange={(value: string) => setForm({ ...form, orgIs: value })} title="Тип организации (Например: торговые центры, школы и т.д.)"
                                orgs={orgs} />
                            <span className={`${styles.not_filled_warning} ${submitted && form.orgIs === '' && styles.not_filled}`}>Введите данные</span>

                            <input value={form.normativ.value} className={`${styles.input} ${submitted && form.normativ.value === '' && styles.not_filled}`} onChange={(e) => setForm({ ...form, normativ: { title: currentNorm && currentNorm[1], value: e.target.value } })} placeholder={currentNorm && currentNorm[1]} disabled={form.orgIs ? false : true} />
                            <span className={`${styles.not_filled_warning} ${submitted && form.normativ.value === '' && styles.not_filled}`}>Введите данные</span>
                        </>
                        :
                        <>
                            <input value={form.kont_count} className={`${styles.input} ${submitted && form.kont_count === '' && styles.not_filled}`} onChange={(e) => setForm({ ...form, kont_count: e.target.value })} placeholder={'Количество контейнеров'} />
                            <span className={`${styles.not_filled_warning} ${submitted && form.kont_count === '' && styles.not_filled}`}>Введите данные</span>

                            <input value={form.m3} className={`${styles.input} ${submitted && form.m3 === '' && styles.not_filled}`} onChange={(e) => setForm({ ...form, m3: e.target.value })} placeholder={'Объем контейнеров (м3)'} />
                            <span className={`${styles.not_filled_warning} ${submitted && form.m3 === '' && styles.not_filled}`}>Введите данные</span>
                        </>
                    }

                </>}

                < input value={form.dolzhn} className={`${styles.input} ${submitted && form.dolzhn === '' && styles.not_filled}`} onChange={(e) => setForm({ ...form, dolzhn: e.target.value })} placeholder="Представитель организации (ФИО, должность)" />
                <span className={`${styles.not_filled_warning} ${submitted && form.dolzhn === '' && styles.not_filled}`}>Введите данные</span>

                <NumberFormat
                    onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                    format="+7 (###) ###-####"
                    name="number" className={`${styles.input} ${submitted && form.phoneNumber === '' && styles.not_filled}`} placeholder="Контактный номер телефона"
                />
                <span className={`${styles.not_filled_warning} ${submitted && form.phoneNumber === '' && styles.not_filled}`}>Введите данные</span>

                <input value={form.email} type='email' onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${styles.input} ${submitted && form.email === '' && styles.not_filled}`} placeholder="E-mail" />
                <span className={`${styles.not_filled_warning} ${submitted && form.email === '' && styles.not_filled}`}>Введите данные</span>

                <textarea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} className={`${styles.input} ${submitted && form.comment === '' && styles.not_filled}`} placeholder={isSub ? 'Какие изменения Вы хотите внести в Ваш договор?' : 'Комменатрий'} />
                <span className={`${styles.not_filled_warning} ${submitted && form.comment === '' && styles.not_filled}`}>Введите данные</span>

                <div className={styles.files}>
                    <div className={styles.files_header}>
                        <label htmlFor="prove" className={styles.upload}>
                            {form.orgType === 'Для физических лиц' ?
                                'Прикрепите паспортные данные, ИНН (личный), Свидетельство о собственности/ договор аренды' :
                                'Прикрепите карточку организации, копию ИНН, копию ОГРН, свидетельство о собственности или договор аренды'
                            }
                            <input multiple onChange={handleUpload} style={{ opacity: 0 }} type="file" name='file' id='prove' />
                        </label>
                        <label htmlFor="prove" className={styles.upload_button}>
                            <b>+</b> Добавить файл
                        </label>
                    </div>
                    <div className={styles.list}>
                        {
                            files.map((file: any) => {
                                return (
                                    <div className={styles.file}>
                                        <img src={docIcon} />
                                        <div className={styles.file_info}>
                                            <span> {file.name}</span>
                                            <span>{Math.floor(file.size / 1000)} кбайт</span>
                                        </div>
                                        <img src={checkedIcon} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.form_bottom}>
                    <div className={styles.checkbox}>
                        <input className={styles["check-box-dn"]} onChange={() => setSigned(!signed)} type="checkbox" name="policy" id="policy" />
                        <label className={styles["check-box"]} htmlFor="policy"></label>
                        Нажимая кнопку «ОТПРАВИТЬ», я даю свое согласие на обработку моих персональных данных на условиях и для целей, определенных в <a target={'_blank'} href={policy}>политике обработки персональных данных</a>
                    </div>
                    <button disabled={!signed} className={styles.button} type="submit">{'Оставить заявку на договор'}</button>
                    <span id='warning' className={`${styles.warning} ${warning && styles.warning_on}`}>Для отправки заявки прикрепите нужный файл</span>
                </div>
            </form>
        </div >

        </div>
    )
}
