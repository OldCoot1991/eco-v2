import styles from './feedback.module.css'
import docIcon from '../../assets/doc_icon.png'
import checkedIcon from '../../assets/checked.png'
import axios from "axios";
import { FormEvent, useState } from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import Select from '../../components/Select';
import policy from '../../assets/docs/policy.pdf'
import { Info } from '../../components/Info';
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';

interface Fields {
    type: string, // Тип обращения
    address?: string, // Адрес вывоза
    fullName?: string, // Фамилия, имя
    phoneNumber?: string, // Номер телефона
    wasteType?: string, // Тип отходов
    organizationName?: string, // Название организации
    organizationType?: string,  // Тип организации
    inn?: string,
    kpp?: string,
    ogrn?: string,
    usluga?: string,
    comment?: string,// Комментарий
    email?: string, // E-mail
    pictures?: string[],
    filesPlaceholder?: string
}


export function SupportJur() {
    let fields: Fields = {
        type: 'Задать вопрос в техническую поддержку',
        organizationName: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        comment: '',
        pictures: [],
        filesPlaceholder: 'Прикрепите фото (видео)'
    }
    return (
        <Feedback fields={fields} />
    )
}

export function ReportTkoJur() {
    let fields: Fields = {
        type: 'Сообщить о невывозе отходов ',
        organizationName: '',
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
        comment: '',
        pictures: [],
        filesPlaceholder: 'Прикрепите фото (видео)'
    }
    return (
        <Feedback fields={fields} />
    )
}

export function RequestTkoJur() {
    let fields: Fields = {
        type: 'Заказать вывоз ТКО, КГО, cтроительного мусора для организации',
        organizationName: '',
        inn: '',
        kpp: '',
        ogrn: '',
        address: '',
        wasteType: '',
        usluga: '',
        email: '',
        phoneNumber: '',
        comment: '',
        pictures: [],
        filesPlaceholder: 'Прикрепите карточку организации с реквизитами для заключения договора'
    }
    return (
        <Feedback fields={fields} />
    )
}

export function Support() {
    let fields: Fields = {
        type: 'Задать вопрос в техническую поддержку',
        fullName: '',
        phoneNumber: '',
        email: '',
        comment: '',
        pictures: [],
        filesPlaceholder: 'Прикрепите фото (видео)'
    }
    return (
        <Feedback fields={fields} />
    )
}

export function RequestTko() {
    let fields: Fields = {
        type: 'Заказать вывоз ТКО, КГО, строительного мусора',
        fullName: '',
        inn: '',
        address: '',
        wasteType: '',
        email: '', // E-mail
        phoneNumber: '', // Номер телефона
        comment: '',
        pictures: [],
        filesPlaceholder: 'Прикрепите скан паспорта для заключения договора'
    }
    return (
        <Feedback fields={fields} />
    )
}
export function ReportTko() {
    let fields: Fields = {
        type: 'Сообщить о невывозе отходов',
        fullName: '',
        address: '',
        email: '', // E-mail
        phoneNumber: '', // Номер телефона
        comment: '',
        pictures: [],
        filesPlaceholder: 'Прикрепите фото (видео)'
    }
    return (
        <Feedback fields={fields} />
    )
}

function Feedback({ fields }: { fields: Fields }) {

    let placeholders: any = {
        type: fields.type, // Тип обращения
        address: 'Адрес', // Адрес вывоза
        fullName: 'Ф.И.О.', // Фамилия, имя
        phoneNumber: 'Номер телефона', // Номер телефона
        wasteType: 'Вид отходов', // Тип отходов
        usluga: 'Вид услуги',
        organizationName: 'Название организации', // Название организации
        organizationType: 'Тип организации',  // Тип организации
        inn: 'ИНН',
        kpp: 'КПП',
        ogrn: 'ОГРН',
        comment: 'Комментарий',// Комментарий
        email: 'e-mail', // E-mail
    }

    const [done, setDone] = useState(false)
    const [load, setLoad] = useState(false)
    const [phone, setPhone] = useState('')
    const [signed, setSigned] = useState(false)
    const [warning, setWarning] = useState(false)

    const [files, setFiles] = useState<File[]>([])
    const [state, setState] = useState({
        ...fields
    })
    const [addressInputs, setAddressInputs] = useState<any>([''])

    const handleChange = (values: NumberFormatValues) => {
        setPhone(values.value);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (state.pictures && files.length === 0) {
            setWarning(true)
            return
        }

        if (phone.length === 10) { // Узнаём полностью ли введен номер
            setLoad(true)
            let formData = new FormData()
            files.forEach(file => {
                formData.append('files', file)
            })
            formData.append('form', JSON.stringify(state))
            axios.post('/api/application', formData).then(res => {
                res.status === 200 && alert(res.data.message)
                setDone(true)
                window.scrollTo(0, 0)
                setLoad(false)
            }).catch(err => alert("Произошла ошибка, повторите позднее"))
        } else {
            alert("Введите номер телефона полностью")
        }

    }

    const handleUpload = (e: any) => {
        let newFiles: any = Array.from(e.target.files)
        setFiles(files.concat([...newFiles]))
        let fileNames: any = Array.from(e.target.files).map((f: any) => f.name)
        setState({ ...state, pictures: fileNames })
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
        setState({ ...state, address: newInputs })
    }

    let kpp = Object.keys(state).includes('kpp')
    return (
        <>
        <div className={styles.container}>
            {done ?
                <>
                    <h1 className={styles.title}>
                        Спасибо за Вашу заявку! <br />
                        Наши специалисты свяжутся с Вами в ближайшее время.
                    </h1>
                    <EcoMobileAppBanner />
                </>
                : (
                    <form onSubmit={handleSubmit} className={styles.form_container}>
                        <h1 className={styles.title}>{state.type}</h1>
                        {Object.keys(state).map((field: any, i) => {
                            if (field == 'phoneNumber') {
                                return (
                                    <NumberFormat
                                        onValueChange={handleChange}
                                        onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
                                        format="+7 (###) ###-####"
                                        name="number" className={styles.input} placeholder="Номер телефона"
                                        required
                                    />
                                )
                            }
                            if (field == 'pictures') {
                                return (
                                    <div className={styles.files}>
                                        <div className={styles.files_header}>
                                            <label htmlFor="prove" className={styles.upload}>
                                                {fields.filesPlaceholder}
                                                <input multiple onChange={handleUpload} style={{display: 'none' }} type="file" name='file' id='prove' />
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
                                )
                            }
                            if (field == 'comment') {
                                return (
                                    <textarea onChange={(e) => setState({ ...state, comment: e.target.value })} name="comment" id="" rows={5} placeholder="Комментарий" required  className={styles.comment}/>
                                )
                            }
                            if (field == 'address') {
                                return (
                                    <>
                                        {
                                            addressInputs.map((v: any, i: any) => {
                                                return (
                                                    <div className={styles["address-group"]}>
                                                        <input value={addressInputs[i]} onChange={(e) => handleAddressChange(e, i)} type="text" placeholder="Адрес" className={styles.address_input} required />
                                                        {
                                                            i >= 1 ? (
                                                                <div onClick={() => handleRemoveAddress(i)} className={`${styles["address-group-button"]} `}> <span className={styles.icon}>➖</span> Удалить адрес</div>
                                                            ) : (
                                                                <div onClick={handleAddAddress} className={`${styles["address-group-button"]} `}> <span className={styles.icon}>➕</span> Добавить адрес</div>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                )
                            }
                            if (field == 'wasteType') {
                                return (
                                    <Select onChange={(value: string) => setState({ ...state, wasteType: value })} title="Вид отходов"
                                        options={['Крупно-габаритный мусор (КГМ)', 'Твердые коммунальные отходы (ТКО)', 'Строительный мусор']} />
                                )
                            }
                            if (field == 'usluga') {
                                return (
                                    <Select onChange={(value: string) => setState({ ...state, usluga: value })} title="Вид услуги"
                                        options={['На вывоз отходов (+ захоронение)', 'Только на захоронение']} />
                                )
                            }
                            if (field == "kpp" || field == 'filesPlaceholder') return
                            if (field != 'type') {
                                if (field == 'inn' && kpp) {
                                    return (
                                        <div className={styles.inn_kpp}>
                                            <input key={field + i} onChange={(e: any) => setState({ ...state, inn: e.target.value })} type="text" name={`${field}`} id="" placeholder="ИНН" required />
                                            <input key={field + i} onChange={(e: any) => setState({ ...state, kpp: e.target.value })} type="" name={`${field}`} id="" placeholder="КПП" required />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <input key={field + i} onChange={(e: any) => setState({ ...state, [field]: e.target.value })} className={styles.input} type="text" name={`${field}`} id="" placeholder={placeholders[field]} required />
                                    )
                                }
                            }
                        })
                        }
                        <div className={styles.form_bottom}>
                            <div className={styles.checkbox}>
                                <input className={styles["check-box-dn"]} onChange={() => setSigned(!signed)} type="checkbox" name="policy" id="policy" />
                                <label className={styles["check-box"]} htmlFor="policy"></label>
                        Нажимая кнопку «ОТПРАВИТЬ», я даю свое согласие на обработку моих персональных данных на условиях и для целей, определенных в <a target={'_blank'} href={policy}>политике обработки персональных данных</a>
                            </div>
                            <button disabled={!signed} className={styles.button} type="submit">{load ? 'Отправка...' : 'Отправить'}</button>
                            <span id='warning' className={`${styles.warning} ${warning && styles.warning_on}`}>Для отправки заявки прикрепите нужный файл</span>
                        </div>
                    </form>
                )
            }
        </div>
        <Info />
        </>
    )
}

