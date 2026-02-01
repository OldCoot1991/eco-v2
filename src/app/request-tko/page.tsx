
export const metadata = {
    title: "Заказать вывоз ТКО | Экологистика КБР",
    description: "Оставьте заявку на вывоз твердых коммунальных отходов. Услуги для частных лиц и организаций в Нальчике и КБР.",
};

import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";

export default function RequestTkoPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Заказать вывоз", item: "/request-tko" },
                ]}
            />
            <SectionTitle title="Заказать вывоз" />

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <p className="mb-6 text-zinc-600">
                    Оставьте заявку на вывоз крупногабаритных отходов (КГО), строительного мусора или заказ бункера. Наш менеджер свяжется с вами для уточнения деталей.
                </p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Ваше имя / Название организации</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors" placeholder="Иван Иванов" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Контактный телефон</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors" placeholder="+7 (999) 000-00-00" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Адрес вывоза</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors" placeholder="Населенный пункт, улица, номер дома" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Тип отходов</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors bg-white">
                                <option>Крупногабаритные (КГО)</option>
                                <option>Строительный мусор</option>
                                <option>Спил деревьев/ветки</option>
                                <option>Другое</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Желаемая дата</label>
                            <input type="date" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Комментарий</label>
                        <textarea className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors h-32 resize-none" placeholder="Укажите примерный объем или особенности подъезда..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-sky-500 text-white font-medium py-3 rounded-lg hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20">
                        Оформить заявку
                    </button>

                    <p className="text-xs text-zinc-400 text-center">
                        Нажимая кнопку, вы даете согласие на обработку персональных данных
                    </p>
                </form>
            </div>
        </div>
    );
}
