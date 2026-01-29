import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import ConstructionContent from "./ConstructionContent";

export const metadata = {
    title: "Строительно-монтажные работы | ООО «Экологистика»",
    description: "Профессиональные строительные и монтажные работы в КБР. Общестроительные работы, инженерные сети, транспортная инфраструктура и монтаж оборудования.",
};

export default function EcostroyConstructionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ConstructionBusiness",
        "name": "Строительно-монтажные работы в КБР",
        "description": "Полный комплекс услуг по возведению зданий, сооружений и монтажу технологических систем в Кабардино-Балкарской Республике.",
        "provider": {
            "@type": "Organization",
            "name": "ООО «Экологистика»",
            "url": "https://ecologistika.ru"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Кабардино-Балкарская Республика"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Строительные услуги",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Общестроительные работы",
                        "description": "Земляные, каменные, кровельные работы, возведение конструкций."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Инженерные сети",
                        "description": "Электроснабжение, водоснабжение, газоснабжение, внутренние системы."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Транспортная инфраструктура",
                        "description": "Строительство дорог, защитных сооружений, благоустройство."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Специальные работы",
                        "description": "Буровые работы, гидротехнические сооружения, свайные основания."
                    }
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
                    { name: "Строительно-монтажные работы", item: "/ecostroy/construction" },
                ]}
            />
            <ConstructionContent />
        </>
    );
}
