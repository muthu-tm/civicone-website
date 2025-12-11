import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { Market } from './components/Market';
import { Vision } from './components/Vision';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Market />
      <Vision />
      <AboutUs />
      <ContactUs />
      <Waitlist />
      <Footer />
    </div>
  );
}
