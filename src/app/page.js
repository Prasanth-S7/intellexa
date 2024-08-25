import { HeroSectionClient } from '@/components/heroSection';
import { TeamSpotlight } from '@/components/whyjoinIntellexa';
import { Footer } from '@/components/footer';
// import { FeatureCards } from '@/components/feature-cards';

export default function Home() {
  return (
    <div>
      <HeroSectionClient />
      <section className='overflow-hidden'>
        <TeamSpotlight />
      </section>
    </div>
  );
}
