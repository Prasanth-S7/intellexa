"use client";
import { useRef } from 'react';
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/shootingStars';
import { AboutUs } from './aboutus';
import { FloatingNavDemo } from './updated-navbar';
import EarthCanvas from "@/components/earth"
export const HeroSectionClient = () => {
    const heroRef = useRef(null);

    return (
        <div>
            <section className='md:mb-[300px] mb-[100px] h-screen overflow-y-hidden font-slussen pt-0 ' ref={heroRef}>
                <FloatingNavDemo></FloatingNavDemo>
                <ShootingStarsAndStarsBackgroundDemo />
            </section>
            <section className='-mb-[100px]'>

                {/* <DotBackgroundDemo> */}
                    <AboutUs heroRef={heroRef} />
                {/* </DotBackgroundDemo> */}
            </section>
            <section>
            <EarthCanvas/>
            </section>

        </div>
    );
};
