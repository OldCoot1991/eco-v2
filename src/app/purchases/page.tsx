import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import PurchasesDocs from "@/components/documents/PurchasesDocs";

export const metadata = {
    title: "Закупки | Экологистика КБР",
    description: "Информация о закупочной деятельности ООО «Экологистика». Перечни товаров, работ и услуг для субъектов МСП.",
};

export default function PurchasesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Закупки и тендеры Экологистика",
        "description": "Официальная информация о закупках, перечни товаров и услуг для субъектов малого и среднего предпринимательства.",
        "publisher": {
            "@type": "Organization",
            "name": "ООО «Экологистика»",
            "url": "https://ecologistika.ru"
        },
        "hasPart": [
            {
                "@type": "DigitalDocument",
                "name": "Приказ №273 от 24.07.2023",
                "description": "Об утверждении Перечня товаров, работ, услуг (закупки у МСП)",
                "url": "https://ecologistika.ru/docs/purchases/order273.pdf"
            },
            {
                "@type": "DigitalDocument",
                "name": "Приказ №286 от 21.12.2023",
                "description": "Об утверждении Перечня товаров, работ, услуг (закупки у МСП)",
                "url": "https://ecologistika.ru/docs/purchases/order286.pdf"
            },
            {
                "@type": "DigitalDocument",
                "name": "Приложение №1 к приказу №286",
                "description": "Перечень товаров, работ, услуг",
                "url": "https://ecologistika.ru/docs/purchases/listOfServicesAndGoods.pdf"
            }
        ]
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
                    { name: "Закупки", item: "/purchases" },
                ]}
            />
            <PurchasesDocs />
        </>
    );
}
