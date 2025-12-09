import Hero from "@/components/hero";
import HowItWorks from "@/components/HowItWorks";
import ProblemAwareness from "@/components/ProblemAwareness";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemAwareness />
      <Solution />
      <HowItWorks />
    </div>
  );
}
