import Hero from './Hero';
import Projects from './Projects';
import ContactCard from './ContactCard';

export const SmoothScroll = () => {
    return (
        <div 
            className="bg-MainLight">
            <Hero />
            <Projects />
            <ContactCard />
        </div>
    );
};