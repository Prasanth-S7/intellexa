import { HeroSectionClient } from '@/components/heroSection';
import { TeamSpotlight } from '@/components/whyjoinIntellexa';
import { Footer } from '@/components/footer';
// import { FeatureCards } from '@/components/feature-cards';
import CardStack from '@/components/teamSpotlight';

export default function Home() {
  return (
    <div>
      <HeroSectionClient />
      <section className='overflow-hidden'>
        <TeamSpotlight />
      </section>
      <section>
        <CardStack />
      </section>
      <section>
        <Footer />
      </section>
      {/* <FeatureCards /> */}
    </div>
  );
}
