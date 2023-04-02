import { useEffect } from "react";
import "./HomePage.css";
import SectionTitle from "../../components/layout/SectionTitle";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="main">
      <div className="hero-container">
        <SectionTitle name={"All posts"} />
      </div>
    </section>
  );
}
