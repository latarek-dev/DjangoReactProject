import { useEffect } from "react";
import "./HomePage.css";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="main">
      <div className="hero-container">
        <h1>All posts</h1>
      </div>
    </section>
  );
}
