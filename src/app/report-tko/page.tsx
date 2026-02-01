
export const metadata = {
    title: "Сообщить о проблеме | Экологистика КБР",
    description: "Сообщите о несвоевременном вывозе мусора, переполненных контейнерах или несанкционированных свалках в КБР.",
};

import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";

export default function ReportTkoPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Сообщить о проблеме", item: "/report-tko" },
                ]}
            />
            <SectionTitle title="Сообщить о проблеме" />

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <p className="mb-6 text-zinc-600">
                    Если вы столкнулись с проблемой несвоевременного вывоза отходов, переполненными контейнерами или несанкционированной свалкой, пожалуйста, заполните форму ниже.
                </p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Ваше имя</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="Иван Иванов" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Телефон</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="+7 (999) 000-00-00" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Адрес проблемы</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="Населенный пункт, улица, номер дома" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Тип проблемы</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors bg-white">
                            <option>Не вывезли мусор по графику</option>
                            <option>Переполненный контейнер</option>
                            <option>Повреждение контейнера</option>
                            <option>Несанкционированная свалка</option>
                            <option>Другое</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Описание</label>
                        <textarea className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors h-32 resize-none" placeholder="Опишите проблему подробнее..."></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Фото (по желанию)</label>
                        <input type="file" className="block w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition-colors" />
                    </div>

                    <button type="submit" className="w-full bg-emerald-600 text-white font-medium py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20">
                        Отправить сообщение
                    </button>

                    <p className="text-xs text-zinc-400 text-center">
                        Нажимая кнопку, вы даете согласие на обработку персональных данных
                    </p>
                </form>
            </div>
        </div>
    );
}
