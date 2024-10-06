
import { GuidelinesPage } from "@/components/guide"; 
import { FloatingNavDemo } from '@/components/updated-navbar';

const Events = () => {
    return (
        <>
        <section className="mb-14">
        <FloatingNavDemo />
        </section>
        <div className="text-white font-slussenLight">
            <GuidelinesPage />
        </div>
        </>
    );
};

export default Events;
