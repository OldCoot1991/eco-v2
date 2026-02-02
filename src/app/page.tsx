import { Hero } from "@/components/home/Hero/Hero";
import { Services } from "@/components/home/Services/Services";
import { News } from "@/components/home/News/News";
import { InfoSection } from "@/components/home/InfoSection/InfoSection";
import { GosuslugiSection } from "@/components/home/GosuslugiSection/GosuslugiSection";
import { MobileApp } from "@/components/home/MobileApp/MobileApp";
import { PaymentPartners } from "@/components/home/PaymentPartners/PaymentPartners";
import { TrustedBy } from "@/components/home/TrustedBy/TrustedBy";
import styles from "./page.module.css";


export const metadata = {
  title: "Экологистика - Главная | Региональный оператор КБР",
  description: "Экологистика - услуги по вывозу мусора и обращению с ТКО в Нальчике и Кабардино-Балкарии. Онлайн оплата, график вывоза, заключение договоров.",
};

export default function Home() {
  return (
    <main className={styles.mainLayout}>
      <Hero />
      <Services />

      <section className={styles.promoSection}>
        <div className={styles.container}>
          <News />
          <InfoSection />
          <MobileApp />
          <PaymentPartners />
        </div>
      </section>
      <TrustedBy />
    </main>
  );
}
