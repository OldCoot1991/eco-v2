"use client";

import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import Link from "next/link";

export default function SupportPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Поддержка", item: "/support" },
                ]}
            />
            <SectionTitle title="Поддержка" />

            <div className={styles.section}>
                <p className={styles.pageText}>
                    Мы всегда готовы ответить на ваши вопросы и помочь в решении проблем, связанных с вывозом мусора и качеством предоставляемых услуг.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                    <h3 className={styles.subtitle}>Сообщить о проблеме</h3>
                    <p className="mb-4 text-zinc-600">
                        Если мусор не вывезли вовремя или вы заметили переполнение контейнеров, сообщите нам об этом через онлайн-форму.
                    </p>
                    <Link href="/report-tko" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                        Подать заявку о невывозе
                    </Link>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                    <h3 className={styles.subtitle}>Заказать вывоз</h3>
                    <p className="mb-4 text-zinc-600">
                        Оформите заявку на вывоз крупногабаритных отходов (КГО) или строительного мусора.
                    </p>
                    <Link href="/request-tko" className="inline-block px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium">
                        Оставить заявку на вывоз
                    </Link>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                    <details className="group bg-white rounded-lg border border-zinc-200 open:ring-1 open:ring-emerald-500/50">
                        <summary className="cursor-pointer p-4 font-medium text-lg list-none flex justify-between items-center">
                            <span>Как заключить договор онлайн?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9" /></svg>
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-zinc-600 border-t border-zinc-100 mt-2">
                            Скачайте заявление на сайте, заполните его и отправьте скан-копию на электронную почту info@ecologistika.com вместе с копиями документов.
                        </div>
                    </details>

                    <details className="group bg-white rounded-lg border border-zinc-200 open:ring-1 open:ring-emerald-500/50">
                        <summary className="cursor-pointer p-4 font-medium text-lg list-none flex justify-between items-center">
                            <span>Что делать, если в квитанции неверные данные?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9" /></svg>
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-zinc-600 border-t border-zinc-100 mt-2">
                            Обратитесь в абонентский отдел с подтверждающими документами (справка о составе семьи, выписка из ЕГРН) для перерасчета.
                        </div>
                    </details>

                    <details className="group bg-white rounded-lg border border-zinc-200 open:ring-1 open:ring-emerald-500/50">
                        <summary className="cursor-pointer p-4 font-medium text-lg list-none flex justify-between items-center">
                            <span>Куда выбрасывать строительный мусор?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9" /></svg>
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-zinc-600 border-t border-zinc-100 mt-2">
                            Строительный мусор не относится к ТКО и его нельзя выбрасывать в общие контейнеры. Необходимо заказать отдельный бункер (лодочку) за дополнительную плату.
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
}
