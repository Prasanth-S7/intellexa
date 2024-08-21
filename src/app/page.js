import { HeroSectionClient } from '@/components/heroSection';
import { TeamSpotlight } from '@/components/whyjoinIntellexa';
import { Footer } from '@/components/footer';
import CardStack from '@/components/teamSpotlight';

export default function Home() {
  return (
    <div>
      <HeroSectionClient />
      <section className='overflow-hidden'>
        <TeamSpotlight />
      </section>
      <Footer />
    </div>
  );
}
