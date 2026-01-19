import { Metadata } from "next";
import CompanyDocs from "@/components/Documents/CompanyDocs";

export const metadata: Metadata = {
  title: "Документы ООО «Экологистика» | Экологистика",
  description: "Устав, лицензии и корпоративные документы ООО «Экологистика»",
};

export default function CompanyDocumentsPage() {
  return <CompanyDocs />;
}
