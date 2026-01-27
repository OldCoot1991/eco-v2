import React from "react";
import styles from './documents.module.css'
import DocumentPurchase from './document'


class PurchaseScene extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.document}>
                    <h1 className={styles.tittle}>Закупки</h1>
                    <div className={styles.container_card}>

                    {DocumentPurchase.map((document, i) => (
                            <div className={styles.row}>
                                <div className={styles.doc_card}>
                                    <a
                                        href={document.href}
                                        className={styles.link}
                                        target="_blank" rel="noreferrer"
                                    >
                                        <p className={styles.paragraf}>
                                        <div className={styles.img}></div> {document.title}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}

export default PurchaseScene;