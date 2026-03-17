export const companyPage = {
    ru: {
        badge: "О компании",
        hero: {
            title1: "Чистое будущее",
            title2: "Кабардино-Балкарии",
            text: "Экологистика — это инновационный подход к обращению с отходами. 900+ сотрудников, собственный автопарк и цифровая экосистема, работающая на благо региона."
        },
        autopark: {
            tag: "Автопарк",
            title: "Технологии на страже чистоты",
            desc: "Мы заменили устаревшую технику на современные мусоровозы и спецтранспорт. Это гарантирует, что мусор будет вывезен вовремя, в любую погоду.",
            stat: "Техники",
            points: [
                "Современные мусоровозы Scania и КАМАЗ",
                "Ежедневный технический аудит",
                "Максимальная эффективность логистики"
            ]
        },
        ecology: {
            title: "Экологическая ответственность",
            text: "Наш полигон — это инженерный комплекс с защитными мембрарами. Мы обрабатываем отходы безопасными реагентами, предотвращая запахи и возгорания. Сохранение природы КБР — наш главный приоритет."
        },
        it: {
            tag: "Цифровизация",
            title: "Полный цифровой контроль",
            desc: "Уникальная IT-платформа позволяет нам видеть каждый мусоровоз, каждый контейнер и каждую операцию в режиме реального времени.",
            stat: "Сотрудников",
            points: [
                "GPS-трекинг всей техники",
                "Прозрачная система расчетов",
                "Удобные приложения для жителей"
            ]
        },
        services: {
            title: "Экосистема Сервисов",
            subtitle: "Мы создаем комплексную инфраструктуру для комфортной жизни в республике",
            items: {
                operator: { title: "Региональный оператор", text: "Вывоз и безопасная утилизация ТКО по всей республике." },
                uk: { title: "Управляющая компания", text: "Профессиональное управление 126 многоквартирными домами." },
                erc: { title: "Расчетный Центр", text: "Единое окно оплаты ЖКХ и современные мобильные сервисы." },
                stroy: { title: "Экострой", text: "Проектирование и благоустройство городских территорий." },
                materials: { title: "Материалы", text: "Собственное производство полимерных и строительных материалов." }
            },
            actions: {
                more: "Подробнее",
                go: "Перейти"
            }
        },
        gallery: {
            uk: { title: "Комфорт в каждый дом", desc: "Управление жилым фондом" },
            erc: { title: "Удобные платежи", desc: "Современные офисы обслуживания" }
        },
        rco: {
            title: "Как сдавать",
            accent: "отходы",
            subtitle: "Инструкция по раздельному сбору для жителей и организаций",
            tabs: {
                plastic: "Пластик",
                glass: "Стекло",
                paper: "Бумага",
                metal: "Металл"
            },
            sections: {
                accept: "Принимаем",
                reject: "Не принимаем",
                preparation: "Как подготовить к сдаче"
            },
            table: {
                code: "Код",
                material: "Материал",
                examples: "Примеры"
            },
            data: {
                plastic: {
                    title: "Пластик",
                    desc: "Существует 7 видов пластика, у каждого – своя маркировка. Обычно она выглядит как треугольник с цифрой или аббревиатурой внутри.",
                    accept: [
                        { code: "1 (PET)", name: "Полиэтилентерефталат", examples: "Бутылки из под воды, напитков, масла" },
                        { code: "2 (HDPE)", name: "Полиэтилен высокой плотности", examples: "Шампуни, гели, бытовая химия, канистры" },
                        { code: "4 (LDPE)", name: "Полиэтилен низкой плотности", examples: "Мусорные мешки, пакеты" },
                        { code: "5 (PP)", name: "Полипропилен", examples: "Ведра, ящики от фруктов" }
                    ],
                    reject: [
                        { code: "3 (PVC)", name: "Поливинилхлорид", examples: "Оконные рамы, блистеры, флаконы" },
                        { code: "6 (PS)", name: "Полистирол", examples: "Одноразовая посуда, контейнеры для яиц" },
                        { code: "7 (Other)", name: "Прочее", examples: "Упаковка для сыра, кофе, тюбики" }
                    ],
                    steps: ["Проверить маркировку", "Удалить остатки пищи, сполоснуть", "Снять этикетки", "Смять тару для объема"]
                },
                glass: {
                    title: "Стекло",
                    desc: "Стекло разлагается около миллиона лет, но может быть переработано на 100% без потери свойств.",
                    accept: [
                        { code: "70 (GL)", name: "Бесцветное стекло", examples: "Банки, бутылки любого цвета" },
                        { code: "71 (GL)", name: "Зеленое стекло", examples: "Бутылки из-под напитков" },
                        { code: "72 (GL)", name: "Коричневое стекло", examples: "Бутылки из-под напитков" }
                    ],
                    reject: [
                        { name: "Фарфор и керамика", examples: "Посуда, вазы" },
                        { name: "Хрусталь", examples: "Бокалы, люстры" },
                        { name: "Лампочки", examples: "Все виды ламп" }
                    ],
                    steps: ["Удалить крышки и пробки", "Сполоснуть от остатков", "Снять этикетки", "Не разбивать специально"]
                },
                paper: {
                    title: "Бумага",
                    desc: "Переработка бумаги спасает деревья и экономит воду. Важно отделять качественную бумагу от загрязненной.",
                    accept: [
                        { code: "20 (PAP)", name: "Гофрокартон", examples: "Коробки от техники, продуктов" },
                        { code: "21 (PAP)", name: "Прочий картон", examples: "Открытки, упаковка" },
                        { code: "22 (PAP)", name: "Бумага", examples: "Журналы, газеты, тетради" }
                    ],
                    reject: [
                        { name: "Tetra-Pak", examples: "Упаковки от соков и молока" },
                        { name: "Грязная бумага", examples: "С остатками пищи" },
                        { name: "Чеки", examples: "Термобумага" }
                    ],
                    steps: ["Удалить скотч и скрепки", "Сложить компактно", "Перевязать кипы", "Убедиться, что бумага сухая"]
                },
                metal: {
                    title: "Металл",
                    desc: "Металл — ценное сырье, которое можно перерабатывать бесконечно. Это экономит до 95% энергии.",
                    accept: [
                        { code: "40 (FE)", name: "Жесть", examples: "Консервные банки, крышки" },
                        { code: "41 (ALU)", name: "Алюминий", examples: "Банки из-под напитков" }
                    ],
                    reject: [
                        { name: "Аэрозоли", examples: "Баллончики" },
                        { name: "Батарейки", examples: "Все типы" },
                        { name: "Фольга", examples: "Пищевая фольга" }
                    ],
                    steps: ["Удалить остатки пищи", "Сполоснуть тару", "Снять этикетки", "Сплющить для экономии места"]
                }
            }
        },
        kids: {
            title: "РСО для",
            accent: "детей",
            subtitle: "Образовательные мультфильмы и материалы о раздельном сборе отходов",
            banner: {
                title: "Учись разделять весело!",
                text: "Посмотрите эти мультфильмы вместе с друзьями, чтобы узнать, как правильно заботиться о нашей планете."
            }
        }
    },
    en: {
        badge: "About Company",
        hero: {
            title1: "Clean Future",
            title2: "of Kabardino-Balkaria",
            text: "Ecologistika is an innovative approach to waste management. 900+ employees, own fleet and a digital ecosystem working for the benefit of the region."
        },
        autopark: {
            tag: "Fleet",
            title: "Technologies Guarding Cleanliness",
            desc: "We have replaced outdated equipment with modern garbage trucks and special vehicles. This guarantees that waste will be removed on time, in any weather.",
            stat: "Vehicles",
            points: [
                "Modern Scania and KAMAZ garbage trucks",
                "Daily technical audit",
                "Maximum logistics efficiency"
            ]
        },
        ecology: {
            title: "Ecological Responsibility",
            text: "Our landfill is an engineering complex with protective membranes. We treat waste with safe reagents, preventing odors and fires. Preserving the nature of the KBR is our top priority."
        },
        it: {
            tag: "Digitalization",
            title: "Full Digital Control",
            desc: "Unique IT platform allows us to see every garbage truck, every container and every operation in real time.",
            stat: "Employees",
            points: [
                "GPS tracking of all vehicles",
                "Transparent calculation system",
                "Convenient apps for residents"
            ]
        },
        services: {
            title: "Service Ecosystem",
            subtitle: "We create a comprehensive infrastructure for comfortable life in the republic",
            items: {
                operator: { title: "Regional Operator", text: "Removal and safe disposal of MSW throughout the republic." },
                uk: { title: "Management Company", text: "Professional management of 126 multi-apartment buildings." },
                erc: { title: "Calculation Center", text: "One-stop shop for utility payments and modern mobile services." },
                stroy: { title: "Ecostroy", text: "Design and improvement of urban areas." },
                materials: { title: "Materials", text: "Own production of polymer and building materials." }
            },
            actions: {
                more: "Details",
                go: "Go"
            }
        },
        gallery: {
            uk: { title: "Comfort in Every Home", desc: "Housing stock management" },
            erc: { title: "Convenient Payments", desc: "Modern service offices" }
        },
        rco: {
            title: "How to",
            accent: "Recycle",
            subtitle: "Instructions for separate waste collection for residents and organizations",
            tabs: {
                plastic: "Plastic",
                glass: "Glass",
                paper: "Paper",
                metal: "Metal"
            },
            sections: {
                accept: "Acceptable",
                reject: "Non-acceptable",
                preparation: "How to prepare"
            },
            table: {
                code: "Code",
                material: "Material",
                examples: "Examples"
            },
            data: {
                plastic: {
                    title: "Plastic",
                    desc: "There are 7 types of plastic, each with its own marking. It usually looks like a triangle with a number or abbreviation inside.",
                    accept: [
                        { code: "1 (PET)", name: "Polyethylene terephthalate", examples: "Water bottles, drinks, oil" },
                        { code: "2 (HDPE)", name: "High-density polyethylene", examples: "Shampoos, gels, household chemicals, canisters" },
                        { code: "4 (LDPE)", name: "Low-density polyethylene", examples: "Garbage bags, packages" },
                        { code: "5 (PP)", name: "Polypropylene", examples: "Buckets, fruit boxes" }
                    ],
                    reject: [
                        { code: "3 (PVC)", name: "Polyvinyl chloride", examples: "Window frames, blisters, bottles" },
                        { code: "6 (PS)", name: "Polystyrene", examples: "Disposable tableware, egg containers" },
                        { code: "7 (Other)", name: "Others", examples: "Packaging for cheese, coffee, tubes" }
                    ],
                    steps: ["Check markings", "Remove food residues, rinse", "Remove labels", "Squeeze for volume"]
                },
                glass: {
                    title: "Glass",
                    desc: "Glass decomposes for about a million years, but can be recycled 100% without loss of properties.",
                    accept: [
                        { code: "70 (GL)", name: "Clear glass", examples: "Jars, bottles of any color" },
                        { code: "71 (GL)", name: "Green glass", examples: "Drink bottles" },
                        { code: "72 (GL)", name: "Brown glass", examples: "Drink bottles" }
                    ],
                    reject: [
                        { name: "Porcelain & Ceramics", examples: "Tableware, vases" },
                        { name: "Crystal", examples: "Glasses, chandeliers" },
                        { name: "Light bulbs", examples: "All types of lamps" }
                    ],
                    steps: ["Remove caps and plugs", "Rinse from residues", "Remove labels", "Do not break specifically"]
                },
                paper: {
                    title: "Paper",
                    desc: "Paper recycling saves trees and water. It is important to separate quality paper from contaminated paper.",
                    accept: [
                        { code: "20 (PAP)", name: "Corrugated cardboard", examples: "Boxes from appliances, products" },
                        { code: "21 (PAP)", name: "Other cardboard", examples: "Postcards, packaging" },
                        { code: "22 (PAP)", name: "Paper", examples: "Magazines, newspapers, notebooks" }
                    ],
                    reject: [
                        { name: "Tetra-Pak", examples: "Juice and milk packaging" },
                        { name: "Dirty paper", examples: "With food residue" },
                        { name: "Receipts", examples: "Thermal paper" }
                    ],
                    steps: ["Remove tape and staples", "Fold compactly", "Tie bundles", "Make sure the paper is dry"]
                },
                metal: {
                    title: "Metal",
                    desc: "Metal is a valuable raw material that can be recycled infinitely. This saves up to 95% of energy.",
                    accept: [
                        { code: "40 (FE)", name: "Tin", examples: "Cans, lids" },
                        { code: "41 (ALU)", name: "Aluminum", examples: "Drink cans" }
                    ],
                    reject: [
                        { name: "Aerosols", examples: "Spray cans" },
                        { name: "Batteries", examples: "All types" },
                        { name: "Foil", examples: "Food foil" }
                    ],
                    steps: ["Remove food residues", "Rinse containers", "Remove labels", "Flatten for space saving"]
                }
            }
        },
        kids: {
            title: "RCO for",
            accent: "Children",
            subtitle: "Educational cartoons and materials about separate waste collection",
            banner: {
                title: "Learn to separate with fun!",
                text: "Watch these cartoons with friends to learn how to take proper care of our planet."
            }
        }
    }
};
