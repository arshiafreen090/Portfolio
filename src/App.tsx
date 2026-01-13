import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import PortfolioCarousel from './components/PortfolioCarousel';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';

function App() {
    return (
        <ClickSpark
            sparkColor='#FFB3D9'
            sparkSize={12}
            sparkRadius={25}
            sparkCount={12}
            duration={500}
        >
            <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-pink selection:text-brand-dark">
                <Navbar />
                <main>
                    <Hero />
                    <AboutMe />
                    <Skills />
                    <PortfolioCarousel />
                    <Services />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ClickSpark>
    );
}

export default App;
