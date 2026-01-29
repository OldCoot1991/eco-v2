import { MobileApp } from "@/components/home/MobileApp/MobileApp";
import { PaymentPartners } from "@/components/home/PaymentPartners/PaymentPartners";
import { TrustedBy } from "@/components/home/TrustedBy/TrustedBy";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className={styles.promoSection}>
        <div className={styles.container}>
          <MobileApp />
          <PaymentPartners />
        </div>
      </section>
      <TrustedBy />
    </main>
  );
}
