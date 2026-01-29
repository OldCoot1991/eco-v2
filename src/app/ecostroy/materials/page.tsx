import styles from "../../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import MaterialsContent from "./MaterialsContent";

export const metadata = {
    title: "Продажа стройматериалов | ООО «Экологистика»",
    description: "Продажа качественных строительных материалов: арматура, полипропиленовые трубы Valtec и другие товары для строительства в КБР.",
};

export default function EcostroyMaterialsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "Продажа стройматериалов Экологистика",
        "description": "Продажа арматуры и полипропиленовых труб от ведущих производителей в Нальчике и КБР.",
        "image": "https://ecologistika.ru/images/materials/armatura_riflenaya_a3_a500s_12_mm.webp",
        "telephone": "+7-8662-22-91-10",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Пушкина, д. 33А/72",
            "addressLocality": "Нальчик",
            "addressRegion": "КБР",
            "postalCode": "360051",
            "addressCountry": "RU"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Каталог стройматериалов",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Арматура",
                    "itemListElement": [
                        {
                            "@type": "Product",
                            "name": "Арматура рифленая А3 (А500С), 12 мм",
                            "image": "https://ecologistika.ru/images/materials/armatura_riflenaya_a3_a500s_12_mm.webp",
                            "description": "Стальная рифленая арматура для фундамента и монолитных работ."
                        },
                        {
                            "@type": "Product",
                            "name": "Арматура стеклопластиковая, 12 мм",
                            "image": "https://ecologistika.ru/images/materials/armatura_stekloplastikovaya_bukhta_10_m_12_mm.webp",
                            "description": "Композитная стеклопластиковая арматура в бухтах."
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Трубы полипропиленовые",
                    "itemListElement": [
                        {
                            "@type": "Product",
                            "name": "Труба Valtec PP-FIBER PN20",
                            "image": "https://ecologistika.ru/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_20_pn20_2_m_20kh2_.webp",
                            "brand": { "@type": "Brand", "name": "Valtec" },
                            "description": "Труба полипропиленовая армированная стекловолокном."
                        }
                    ]
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Экострой", item: "/ecostroy" },
                    { name: "Продажа стройматериалов", item: "/ecostroy/materials" },
                ]}
            />
            <MaterialsContent />
        </>
    );
}
