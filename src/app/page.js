'use client';
import dynamic from 'next/dynamic';
import { HeroSectionClient } from '@/components/heroSection';
import { TeamSpotlight } from '@/components/whyjoinIntellexa';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <HeroSectionClient />
      <section className='overflow-hidden'>
        <TeamSpotlight />
      </section>
    </div>
  );
}
