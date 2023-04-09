import { useEffect } from "react";
import "./HomePage.css";
import SectionTitle from "../../components/layout/SectionTitle";
import HeroSection from "../../components/homepage/heroSection/HeroSection";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="main">
      <div className="hero-container">
        <SectionTitle name={"All posts"} />
        <HeroSection />
      </div>
    </section>
  );
}
