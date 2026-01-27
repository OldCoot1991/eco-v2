import React from 'react';
import Bak from './img/how_we_work_1.png';
import Line from './img/how_we_work_2.png';
import Car from './img/how_we_work_3.png';
import Cov from './img/how_we_work_4.png';
import Hous from './img/how_we_work_5.png';
import Line2 from './img/how_we_work_6.png';
import Krug from './img/how_we_work_7.png';


const cards = [
    {
        href: Bak,
        href2: Line,
        number: 1,
        zagolovok: "Cбор",
        paragraph: "Ежедневно мы забираем отходы из 7000 контейнеров, бункеров и пунктов для сбора ТКО."
    },
    {
        href: Car,
        href2: Cov,
        number: 2,
        zagolovok: "Вывоз",
        paragraph: "У нас свой автопарк: более 80 единиц современной техники. Мы вывозим отходы согласно графику. Контейнер для раздельного сбора отходов обслуживает отдельны мусоровоз."
    },
    {
        href: Hous,
        href2: Line2,
        number: 3,
        zagolovok: "Сортировка",
        paragraph: "Собранные отходы попадают на наш сортировочный комплекс. Здесь мы разделяем отходы повидам и типам, отделяем вторичное сырье."
    },
    {
        href: Krug,
        number: 4,
        zagolovok: "Переработка и утилизация",
        paragraph: "Отсортированное вторичное сырье мы направляем компаниям-переработчикам. Отходы, не подлежащие переработке, размещаем на официальных полигонах ТКО."
    },
]

export default cards;
