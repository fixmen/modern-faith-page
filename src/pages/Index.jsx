import { useEffect } from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Team from "../components/Team";
import History from "../components/History";
import Location from "../components/Location";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden relative">
      <Hero />
      <Mission />
      <Team />
      <History />
      <Location />
    </main>
  );
};

export default Index;