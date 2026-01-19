import { Metadata } from "next";
import NormativeActs from "@/components/Documents/NormativeActs";

export const metadata: Metadata = {
  title: "Нормативные правовые акты | Экологистика",
  description: "Официальные документы и законодательная база в сфере обращения с ТКО",
};

export default function LegalDocumentsPage() {
  return <NormativeActs />;
}
