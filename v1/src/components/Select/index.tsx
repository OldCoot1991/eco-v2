import { useState } from 'react'
import styles from './select.module.css'

export default function Select({ options, onChange, title, submitted, orgs }: { options?: string[], onChange: any, title: string, submitted?: boolean, orgs?: string[][] }) {
    const [current, setCurrent] = useState<string>()
    const [dropdown, setDropdown] = useState(false)
    const handleSelect = (opt: string) => {
        setCurrent(opt)
        onChange(opt)
        setDropdown(false)
    }
    return (
        <div className={styles.select}>

            <div onClick={() => setDropdown(!dropdown)} className={`${styles.header} ${submitted && current === undefined ? styles.not_filled : ''}`}>

                {current ? <div className={styles.current}>{current}</div> :
                    <div className={styles.title}>{title}</div>}

                <div className={styles.arrow}>{dropdown ? "⌃" : "⌄"}</div>

            </div>

            <div className={`${styles.list} ${dropdown && styles.open}`}>
                {options ? options.map((opt, i) => {
                    return <div onClick={() => handleSelect(opt)} className={styles.option}>{opt}</div>
                }) : orgs?.map((org, i) => {
                    if (org[1]) {
                        return <div onClick={() => handleSelect(org[0])} className={styles.org}>{org[0]}</div>
                    } else {
                        return <div className={styles.org_title}>{org[0]}</div>
                    }
                })}
            </div>

        </div>
    )
}
