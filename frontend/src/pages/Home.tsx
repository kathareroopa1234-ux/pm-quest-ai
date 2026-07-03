import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import LearningJourney from "../components/LearningJourney";

function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <LearningJourney />
    </div>
  );
}

export default Home;