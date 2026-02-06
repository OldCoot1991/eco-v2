import { HeroBanner } from "@/widgets/hero-banner/HeroBanner";
import { MobileApp } from "@/widgets/mobile-app/MobileApp";
import { PaymentPartners } from "@/widgets/payment-partners/PaymentPartners";
import { TrustedBy } from "@/widgets/trusted-by/TrustedBy";
import styles from "./page.module.css";

export const metadata = {
  title: "Экологистика - Главная | Региональный оператор КБР",
  description:
    "Экологистика - услуги по вывозу мусора и обращению с ТКО в Нальчике и Кабардино-Балкарии. Онлайн оплата, график вывоза, заключение договоров.",
};

export default function Home() {
  return (
    <main className={styles.mainLayout}>
      <HeroBanner />
      <MobileApp />
      <section className={styles.promoSection}>
        <div className={styles.container}>
          <PaymentPartners />
        </div>
      </section>
      <TrustedBy />
    </main>
  );
}
