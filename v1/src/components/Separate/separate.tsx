import React from "react";
import plastik from "./img/butilka.webp";
import steklo from "./img/steklo.webp";
import bumaga from "./img/bumaga.webp";
import metal from "./img/metal.webp";
import plastik1 from "./img/plastik/plastik1.webp";
import steklo1 from "./img/steklo/steklo1.webp";
import styles from "../Separate/table.module.css";
import one from "../Separate/img/plastik/1.webp";
import two from "../Separate/img/plastik/2.webp";
import three from "../Separate/img/plastik/3.webp";
import four from "../Separate/img/plastik/4.webp";
import five from "../Separate/img/plastik/5.webp";
import six from "../Separate/img/plastik/6.webp";
import seven from "../Separate/img/plastik/7.webp";
import crossregular from "../Separate/img/crossregular.svg";
import seventy from "../Separate/img/steklo/seventy.webp";
import sevetyone from "../Separate/img/steklo/seventy-one.webp";
import sevetytwo from "../Separate/img/steklo/seventy-two.webp";
import sevetythree from "../Separate/img/steklo/seventy-three.webp";
import sevetyfour from "../Separate/img/steklo/seventy-four.webp";
import bottomimg from "./img/plastik/bottom-img.webp";
import bottomimg2 from "./img/plastik/bottom-img-2.webp";
import bottomimg3 from "./img/plastik/bottom-img-3.webp";
import bottomimg4 from "./img/plastik/bottom-img-4.webp";
import icons1 from "./img/icons1.svg";
import steklobotton1 from "./img/steklo/4.webp";
import steklobotton2 from "./img/steklo/3.webp";
import steklobottom3 from "./img/steklo/2.webp";
import steklobottom4 from "./img/steklo/1.webp";
import bumaga1 from "./img/bumaga/bumaga.webp";
import twenty from "./img/bumaga/twenty.webp";
import twentyone from "./img/bumaga/twenty-one.webp";
import twentytwo from "./img/bumaga/twenty-two.webp";
import bottombumaga from "./img/bumaga/bottom-bumaga.webp";
import bottombumaga2 from "./img/bumaga/bottom-bumaga2.webp";
import metall2 from "./img/metall/metall2.webp";
import fortyone from "./img/metall/forty-one.webp";
import forty from "./img/metall/forty.webp";
import metallone from "./img/metall/1.webp";
import metalltwo from "./img/metall/2.webp";
import mettalfree from "./img/metall/3.webp";

const images = [
    {
        image: plastik,
    },
    {
        image: steklo,
    },
    {
        image: bumaga,
    },
    {
        image: metal,
    },
];

export { images };

export interface Card {
    image: string;
    zagolovok: string;
    subtext: string;
    tablezagolovok: string;
    subtitlle: string;
    icon: string;
    icons2: string;
    subzagolok: string;
    id: string;
    id2: string;
    id3: string;
    wrapperimage: () => React.ReactElement;
    table: () => React.ReactElement;
    subtablee: () => React.ReactElement;
}

const cards: Card[] = [
    {
        image: plastik1,
        zagolovok: "Условия сбора пластика",
        subtext: `Существует 7 видов пластика, у каждого – своя маркировка.
        Обычно она выглядит как треугольник с цифрой или
        аббревиатурой внутри.`,
        tablezagolovok: "Принимаем в переработку",
        icon: icons1,
        id: "plastik1",
        id2:"plastik2",
        id3:"plastik3",
        table: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table_text_header}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Маркировка</p>
                            <p className={styles.text}>Название материала</p>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={one}></img>
                            <p className={styles.text}>
                                PET (E) или ПЭТ <br /> Полиэтилентерефталат
                            </p>
                            <p className={styles.text}>
                                Бутылки из под воды, газированных напитков,
                                соков, молока, масла
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={two}></img>
                            <p className={styles.text}>
                                PEHD (HDPE) или ПНД <br /> Полиэтилен высокой
                                плотности, низкого давления
                            </p>
                            <p className={styles.text}>
                                Упаковки от шампуня, геля для душа, бытовой
                                химии, крышка для бутылок, канистры, детские
                                игрушки, тазы, ведра
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={four}></img>
                            <p className={styles.text}>
                                PELD (LDPE) или ПВД <br /> Полиэтилен низкой
                                плотности, высокого давления
                            </p>
                            <p className={styles.text}>
                                Мусорные мешки, пакеты
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={five}></img>
                            <p className={styles.text}>
                                PP или ПП <br /> Полипропилен
                            </p>
                            <p className={styles.text}>
                                Белые ведра, ящики от фруктов
                            </p>
                        </div>
                    </div>
                </div>
            );
        },
        subtitlle: "Не принимаем в переработку",
        icons2: crossregular,
        subtablee: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Маркировка</p>
                            <p className={styles.text}>Название материала</p>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={three}></img>
                            <p className={styles.text}>
                                PVC или ПВХ <br /> Поливинилхлорид
                            </p>
                            <p className={styles.text}>
                                Оконные рамы, блистеры, упаковка для таблеток,
                                термоусадочная пленка, флаконы для косметики,
                                игрушки
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={six}></img>
                            <p className={styles.text}>
                                PS или ПС <br /> Полистирол
                            </p>
                            <p className={styles.text}>
                                Одноразовая посуда, контейнеры для яиц, подложки
                                для мяса и фасовки, крышки от тортов
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={seven}></img>
                            <p className={styles.text}>
                                O (ther) или другое <br /> Смесь различных
                                пластиков
                            </p>
                            <p className={styles.text}>
                                Смесь различных пластиков или полимеры, не
                                указанные выше, например упаковка для сыра,
                                кофе, корма для животных, тюбики из под зубной
                                пасты
                            </p>
                        </div>
                    </div>
                </div>
            );
        },
        subzagolok: "Как подготовить тару",
        wrapperimage: () => {
            return (
                <div className={styles.bottom_card}>
                    <div className={styles.card_img}>
                        <img
                            src={bottomimg4}
                            alt=""
                            className={styles.images_bottom_rotate}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>1.</span> Проверить
                            маркировку
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={bottomimg3}
                            alt=""
                            className={styles.images_bottoms}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>2.</span> Удалить
                            остатки пищи и жидкости, сполоснуть тару
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={bottomimg2}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>3.</span> Снять
                            этикетки
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={bottomimg}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            {" "}
                            <span className={styles.spam}>4.</span> Смять тару
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        image: steklo1,
        zagolovok: "Условия сбора стекела",
        subtext: `В естественной среде стекло разлагается около миллиона лет.
        Но при этом оно может быть переработано на 100%, не теряя
        своих свойств. Переработка на 40% дешевле, чем производство
        нового стекла.`,
        tablezagolovok: "Принимаем в переработку",
        icon: icons1,
        id: "plastik4",
        id2:"plastik5",
        id3:"plastik6",
        table: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table_text_header}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Маркировка</p>
                            <p className={styles.text}>Название материала</p>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon2} src={seventy}></img>
                            <p className={styles.text}>GL Прозрачное стекло</p>
                            <p className={styles.text}>
                                Стеклянные банки, бутылки любого цвета и
                                размера, битое стекло
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon2} src={sevetyone}></img>
                            <p className={styles.text}>GL Зеленое стекло</p>
                            <p className={styles.text}></p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon2} src={sevetytwo}></img>
                            <p className={styles.text}>GL Коричневое стекло</p>
                            <p className={styles.text}></p>
                        </div>
                        <div className={styles.table_row}>
                            <img
                                className={styles.icon2}
                                src={sevetythree}
                            ></img>
                            <p className={styles.text}>
                                GL Бутылочное стекло тёмно-коричневое
                            </p>
                            <p className={styles.text}></p>
                        </div>
                        <div className={styles.table_row}>
                            <img
                                className={styles.icon2}
                                src={sevetyfour}
                            ></img>
                            <p className={styles.text}>
                                GL Бутылочное стекло светло-коричневое
                            </p>
                            <p className={styles.text}></p>
                        </div>
                    </div>
                </div>
            );
        },
        subtitlle: "Не принимаем в переработку",
        icons2: crossregular,
        subtablee: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Керамические и фарфоровые изделия
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>Хрусталь</p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Лампочки накаливания, энергосберегающие лампочки
                            </p>
                        </div>
                    </div>
                </div>
            );
        },
        subzagolok: "Как подготовить тару",
        wrapperimage: () => {
            return (
                <div className={styles.bottom_card}>
                    <div className={styles.card_img}>
                        <img
                            src={steklobottom4}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>1.</span> Проверить
                            маркировку
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={steklobottom3}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>2.</span> Удалить
                            остатки пищи и жидкости, сполоснуть тару
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={steklobotton2}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>3.</span> Снять
                            этикетки
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={steklobotton1}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            {" "}
                            <span className={styles.spam}>4.</span> Смять тару
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        image: bumaga1,
        zagolovok: "Условия сбора бумаги",
        subtext: `Обычную макулатуру можно разделить на две группы:
        Группа Б – отходы среднего качества. К ним относятся:
        гофрированный картон; картон с печатью, книги, журналы,
        брошюры, проспекты, каталоги, блокноты, тетради,
        записные книжки без обложек и другие изделия на белой
        бумаге. Группа В – отходы низкого качества. Это – газеты;
        бумажные гильзы, шпули, втулки без пропитки; литые
        изделия из бумажной массы; влагостойкий и ламинированный
        картон и бумага; черный, коричневый и цветной картон с
        большой заливкой.`,
        tablezagolovok: "Принимаем в переработку",
        icon: icons1,
        id: "plastik7",
        id2:"plastik8",
        id3:"plastik9",
        table: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table_text_header}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Маркировка</p>
                            <p className={styles.text}>Название материала</p>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={twenty}></img>
                            <p className={styles.text}>
                                PAP (PCB)
                                <br />
                                Гафрированный картон
                            </p>
                            <p className={styles.text}>
                                Коробки от бытовой техники, продуктов, косметики
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={twentyone}></img>
                            <p className={styles.text}>
                                PAP <br /> Прочий картон
                            </p>
                            <p className={styles.text}>Открытки</p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={twentytwo}></img>
                            <p className={styles.text}>
                                PAP <br /> Бумага
                            </p>
                            <p className={styles.text}>
                                Журналы и газеты, конверты, бумажные пакеты,
                                бумага для печати
                            </p>
                        </div>
                    </div>
                </div>
            );
        },
        subtitlle: "Не принимаем в переработку",
        icons2: crossregular,
        subtablee: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Маркировка</p>
                            <p className={styles.text}>Название материала</p>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.table_row}>
                            <p className={styles.text}>Tetra-Pak</p>
                            <p className={styles.text}>Упаковка Tetra-Pak</p>
                            <p className={styles.text}>
                                Коробки из-под сока, молока, кефира
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Бумажные втулки (от бумажных полотенец)
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>Чайные пакетики</p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Влагостойкую бумагу (одноразовая посуда,
                                “бумажные” стаканчики от кофе и т.п.)
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Упаковка от яиц (это не картон, а валяная
                                целлюлоза)
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Глянцевая бумага, покрытая тонким слоем пленки:
                                например, фантики от конфет, оберточная бумага с
                                блестками (надорвите край, чтобы проверить)
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Кассовые чеки (в состав чековой ленты входит
                                токсичное вещество бисфенол А, которое
                                загрязняет остальное сырье)
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>Салфетки</p>
                        </div>
                    </div>
                </div>
            );
        },
        subzagolok: "Как подготовить тару",
        wrapperimage: () => {
            return (
                <div className={styles.bottom_card}>
                    <div className={styles.card_img}>
                        <img
                            src={bottombumaga}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>1.</span>Картонные
                            коробки разложить по сгибам, сложить компактно
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={bottombumaga2}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>3.</span>Перевязать
                            кипы бумаг или сложить в коробки
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        image: metall2,
        zagolovok: "Условия сбора металла",
        subtext: `Металл в зависимости от вида разлагается в среднем 100 лет
        и дольше. Тонкие жестяные консервные банки быстро ржавеют
        и разлагаются быстрее. Но гораздо экологичнее сдать их на
        переработку.`,
        tablezagolovok: "Принимаем в переработку",
        icon: icons1,
        id: "plastik10",
        id2:"plastik11",
        id3:"plastik12",
        table: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table_text_header}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Маркировка</p>
                            <p className={styles.text}>Название материала</p>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={forty}></img>
                            <p className={styles.text}>
                                FE <br /> Жесть
                            </p>
                            <p className={styles.text}>
                                Консервные банки, крышки из-под стеклянных банок
                            </p>
                        </div>
                        <div className={styles.table_row}>
                            <img className={styles.icon} src={fortyone}></img>
                            <p className={styles.text}>
                                ALU <br /> Алюминий
                            </p>
                            <p className={styles.text}>
                                Алюминиевые банки из-под напитков
                            </p>
                        </div>
                    </div>
                </div>
            );
        },
        subtitlle: "Не принимаем в переработку",
        icons2: crossregular,
        subtablee: () => {
            return (
                <div className={styles.content_table}>
                    <div className={styles.table}>
                        <div className={styles.table_rows}>
                            <p className={styles.text}>Тара</p>
                        </div>
                        <div className={styles.table_row}>
                            <p className={styles.text}>
                                Баллончики из-под аэрозолей
                            </p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>Батарейки</p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>Газовые баллоны</p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>Фольга</p>
                        </div>
                        <div className={styles.tables_row}>
                            <p className={styles.text}>
                                Одноразовые контейнеры для выпечки/еды
                            </p>
                        </div>
                    </div>
                </div>
            );
        },
        subzagolok: "Как подготовить тару",
        wrapperimage: () => {
            return (
                <div className={styles.bottom_card}>
                    <div className={styles.card_img}>
                        <img
                            src={mettalfree}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>1.</span>Удалить
                            остатки пищи и жидкости, сполоснуть тару
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={metalltwo}
                            alt=""
                            className={styles.images_bottoms}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>2.</span>Снять
                            этикетки
                        </p>
                    </div>
                    <div className={styles.card_img}>
                        <img
                            src={metallone}
                            alt=""
                            className={styles.images_bottom}
                        />
                        <p className={styles.sybparagraf}>
                            <span className={styles.spam}>3.</span>Смять тару
                            для уменьшения объема
                        </p>
                    </div>
                </div>
            );
        },
    },
];
export { cards };
