import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Opportunity } from "@/components/sections/Opportunity";
import { Services } from "@/components/sections/Services";
import { Videos } from "@/components/sections/Videos";
import { WhyA2R2 } from "@/components/sections/WhyA2R2";
import { Work } from "@/components/sections/Work";
import { Footer } from "@/components/ui/Footer";
import { Navigation } from "@/components/ui/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Videos />
        <Opportunity />
        <Services />
        <WhyA2R2 />
        <Approach />
        <Industries />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
