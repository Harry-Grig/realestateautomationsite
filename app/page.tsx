import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/hero";
import HowItWorks from "@/components/HowItWorks";
import ProblemAwareness from "@/components/ProblemAwareness";
import Results from "@/components/Results";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemAwareness />
      <Solution />
      <HowItWorks />
      <UseCases />
      <Results />
      <FinalCTA />
      <Footer />
    </div>
  );
}
