import React from 'react';
import styles from './documents.module.css'
import documents from "./document"


class DocumentsCompanyScene extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.document}>
                    <h1 className={styles.tittle}>Документы ООО «Экологистика»</h1>
                    <div className={styles.container_card}>
                        {documents.map((document , i) => (
                            <div className={styles.row}>
                                <div className={styles.doc_card}>
                                    <a
                                        href={document.href}
                                        className={styles.link}
                                        target="_blank"
                                    >
                                        <p className={styles.paragraf}>
                                        {i+1}. {document.title}
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

export default DocumentsCompanyScene;

