"use client";
import { useRef } from 'react';
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/shootingStars';
import { AboutUs } from './aboutus';
import { FloatingNavDemo } from './updated-navbar';
import { DotBackgroundDemo } from './dotgridbackground';

export const HeroSectionClient = () => {
    const heroRef = useRef(null);

    return (
        <div>
            <section className='mb-[300px] min-h-screen font-slussen pt-0 ' ref={heroRef}>
                <FloatingNavDemo></FloatingNavDemo>
                <ShootingStarsAndStarsBackgroundDemo />
            </section>
            <section>
                {/* <DotBackgroundDemo> */}
                    <AboutUs heroRef={heroRef} />
                {/* </DotBackgroundDemo> */}
            </section>
        </div>
    );
};
