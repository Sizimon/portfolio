import Hero from './HeroComponents/Hero';
import Projects from './Projects';
import ContactCard from './ContactCard';

export const Portfolio = () => {
    return (
        <div 
            className="bg-MainLight">
            <Hero />
            <Projects />
            <ContactCard />
        </div>
    );
};