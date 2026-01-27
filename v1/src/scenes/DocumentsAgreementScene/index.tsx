import React from "react";
import styles from "./documents.module.css";
import document from "../../scenes/DocumentsAgreementScene/document";
import notification_of_changes from "../../assets/docs/notification_of_changes.pdf";

class DocumentsAgreementScene extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.document}>
                    <h1 className={styles.tittle}>
                        Заключение договора на оказание услуг по обращению с ТКО
                    </h1>
                    <h3>
                        <a href={notification_of_changes} target="_blank" rel="noreferrer" style={{color: 'red'}}>
                            Уведомление о внесении изменений в типовую форму договора!
                        </a>
                    </h3>
                    <div className={styles.container_card}>
                        {document.map((document, i) => (
                            <div className={styles.row}>
                                <div className={styles.doc_card}>
                                    <a
                                        href={document.href}
                                        className={styles.link}
                                        target="_blank" rel="noreferrer"
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

export default DocumentsAgreementScene;
