import SpotlightPreview from '@/components/spotlight-demo';
import { CardsGridDemo } from '@/components/cards-grid-demo';
import { FeaturesBenefits } from '@/components/features-benefits';
import MacbookDemo from '@/components/macbook-demo';
import { CurvedContact } from '@/components/curved-contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-black">
      <SpotlightPreview />
      <CardsGridDemo />
      <FeaturesBenefits />
      <MacbookDemo />
      <CurvedContact />
      <Footer />
    </main>
  );
} 