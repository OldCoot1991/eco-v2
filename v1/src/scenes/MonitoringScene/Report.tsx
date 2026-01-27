import { useContext } from 'react';
import { DateContext } from '.';
import styles from './monitoring.module.css'

export default function Report() {
    const reportContext = useContext(DateContext)
    return (
        <div className={styles.report}>
            Построить отчет за период: <br />
            <input onChange={(e) => reportContext.set((prev: any) => prev = [e.target.value, prev[1]])} type="date" name="" id="from" />
            <input onChange={(e) => reportContext.set((prev: any) => prev = [prev[0], e.target.value])} type="date" name="" id="to" />
            <button disabled={reportContext.report === 'loading'} onClick={reportContext.getReport}>Построить отчет</button> <br />
            {reportContext.report === 400 && "Нет данных за данный период"}
            {reportContext.report === 500 && "Произошла внутренняя ошибка"}
            {reportContext.report === 'loading' && "Идет построение отчета..."}
            {typeof reportContext.report === 'object' && (
                <table className={styles.report_table}>
                    <thead>
                        <tr>
                            <th>Модель</th>
                            <th>Начало</th>
                            <th>Конец</th>
                            <th>Продолж.</th>
                        </tr>	</thead>
                    <tbody>
                        {reportContext.report.map((row: any) => {
                            return (
                                <tr>
                                    <td>{row.cells[2].cell.value}</td>
                                    <td>{row.cells[4].cell.value}</td>
                                    <td>{row.cells[5].cell.value}</td>
                                    <td>{row.cells[6].cell.value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}
