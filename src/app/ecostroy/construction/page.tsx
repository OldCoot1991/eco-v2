import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import ConstructionContent from "./ConstructionContent";

export const metadata = {
    title: "Строительно-монтажные работы | ООО «Экологистика»",
    description: "Профессиональные строительные и монтажные работы в КБР. Общестроительные работы, инженерные сети, транспортная инфраструктура и монтаж оборудования.",
};

export default function EcostroyConstructionPage() {
    return (
        <>
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
