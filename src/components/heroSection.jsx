"use client";
import { useRef } from 'react';
import Navbar from './navbar';
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/shootingStars';
import { AboutUs } from './aboutus';

export const HeroSectionClient = () => {
    const heroRef = useRef(null);

    return (
        <div>
            <section className='mb-[300px] min-h-screen font-slussen' ref={heroRef}>
                <Navbar />
                <ShootingStarsAndStarsBackgroundDemo />
            </section>
            <section>
                <AboutUs heroRef={heroRef} />
            </section>
        </div>
    );
};
