'use client';
import dynamic from 'next/dynamic';
import { HeroSectionClient } from '@/components/heroSection';
import { TeamSpotlight } from '@/components/whyjoinIntellexa';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={15}
        color='146, 8, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        hasBlendMode={true}
        outerScale={5}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }} />
      <HeroSectionClient />
      <section className='overflow-hidden'>
        <TeamSpotlight />
      </section>
    </div>
  );
}
