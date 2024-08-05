import { HeroSectionClient } from '@/components/heroSection';
import { TeamSpotlight } from '@/components/teamSpotlight';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
      <div>
        <HeroSectionClient />
        <TeamSpotlight />
        <Footer />
      </div>
  );
}
