import NewsContent from "./NewsContent";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";


export const metadata = {
    title: "Новости | Экологистика КБР",
    description: "Актуальные новости регионального оператора Экологистика. События, изменения в графике, важная информация для абонентов.",
};


export default function NewsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Новости Экологистика КБР",
        "description": "Последние новости и события регионального оператора.",
        "url": "https://ecologistika.com/news"
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
                    { name: "Новости", item: "/news" },
                ]}
            />
            <NewsContent />
        </>
    );
}
