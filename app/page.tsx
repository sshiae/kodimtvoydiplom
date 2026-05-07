import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Technologies } from '@/components/Technologies';
import { Process } from '@/components/Process';
import { WhyUs } from '@/components/WhyUs';
import { Team } from '@/components/Team';
import { FAQ } from '@/components/FAQ';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Services />
        <Technologies />
        <Process />
        <WhyUs />
        <Team />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
