import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { InfoSection } from "@/components/home/InfoSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { News } from "@/components/home/News";
import { AppPromo } from "@/components/home/AppPromo";
import { TrustedBy } from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <InfoSection />
      <HowItWorks />
      <News />
      <AppPromo />
      <TrustedBy />
    </main>
  );
}
