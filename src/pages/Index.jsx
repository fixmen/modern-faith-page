import { useEffect } from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Team from "../components/Team";
import History from "../components/History";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Mission />
      <Team />
      <History />
    </main>
  );
};

export default Index;