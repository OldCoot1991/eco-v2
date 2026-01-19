import { Metadata } from "next";
import ContractDocs from "@/components/Documents/ContractDocs";

export const metadata: Metadata = {
  title: "Заключение договора | Экологистика",
  description: "Типовые договоры и заявки на заключение договора на оказание услуг по обращению с ТКО",
};

export default function ContractPage() {
  return <ContractDocs />;
}
