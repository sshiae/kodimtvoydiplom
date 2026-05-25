import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Technologies } from '@/components/Technologies';
import { Process } from '@/components/Process';
import { WhyUs } from '@/components/WhyUs';
import { Team } from '@/components/Team';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/data';
import { getReviews } from '@/lib/reviews';

export default function HomePage() {
  const reviews = getReviews();
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    sameAs: [SITE.primaryContact],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: SITE.primaryContact,
        availableLanguage: ['ru'],
      },
    ],
  };

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
        <Reviews reviews={reviews} />
        <FAQ />
        <Contacts />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <Footer />
    </>
  );
}
