import styles from './monitoring.module.css'
import trashbox from '../../assets/trashbox.png'
import trashboxGrayed from '../../assets/trashbox-grayed.png'
import line from '../../assets/line.png'
import point from '../../assets/point.png'
import { useState } from 'react'

export default function ListItem({ index, style, data }: { index: any, style: any, data: any }) {
    const [showInfo, setShowInfo] = useState(false)
    let active = data.points[index].end !== null ? new Date() < new Date(data.points[index].end) : true
    return (
        <div style={style}>
            {showInfo &&
                <div className={styles.hover_baloon}>
                    <div>
                        <div className={styles.point_name}>
                            <img src={active ? trashbox : trashboxGrayed} />
                            <div className={styles.point_status}>
                                <span>{data.points[index].name}</span>
                                <span>{active ? <div className={styles.active}>Активна</div> : <div className={styles.inactive}>Неактивна</div>}</span>
                            </div>
                        </div>
                        <div className={styles.splitter}></div>
                        <div className={styles.point_address}>
                            <span>Адрес:</span>  <span>{data.points[index].description}</span>
                        </div>
                        <div className={styles.splitter}></div>
                        <div className={styles.radius}>
                            <span>Радиус:</span>  <span>{data.points[index].radius}м</span>
                        </div>
                        <div className={styles.splitter}></div>
                        <div className={styles.begin}>
                            <span>Дата начала расчетов:</span>  <span>{data.points[index].begin.split('T')[0].split('-').reverse().join('.')}</span>
                        </div>
                        {data.points[index].end &&
                            <>
                                <div className={styles.splitter}></div>
                                <div className={styles.begin}>
                                    <span>Дата окончания расчетов:</span>  <span>{data.points[index].end.split('T')[0].split('-').reverse().join('.')}</span>
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
            <span onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)} key={data.points[index].id} onClick={() => data.handle(data.points[index].id)} className={styles.entry}>
                <span className={`${styles.status} ${active ? styles.active : styles.inactive}`}></span>
                <img src={data.points[index].type === 'LineString' ? line : point} alt="Тип" className={styles.geo_type} />
                {data.points[index].name}
            </span>
        </div>
    )
}
