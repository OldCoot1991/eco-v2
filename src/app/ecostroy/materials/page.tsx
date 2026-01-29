import styles from "../../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import MaterialsContent from "./MaterialsContent";

export const metadata = {
    title: "Продажа стройматериалов | ООО «Экологистика»",
    description: "Продажа качественных строительных материалов: арматура, полипропиленовые трубы Valtec и другие товары для строительства в КБР.",
};

export default function EcostroyMaterialsPage() {
    return (
        <>
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
