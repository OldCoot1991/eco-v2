import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import PurchasesDocs from "@/components/Documents/PurchasesDocs";

export const metadata = {
    title: "Закупки | Экологистика КБР",
    description: "Информация о закупочной деятельности ООО «Экологистика». Перечни товаров, работ и услуг для субъектов МСП.",
};

export default function PurchasesPage() {
    return (
        <>
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
