import Hero from "../components/Hero";
import AboutOverview from "../components/AboutOverview";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <Hero />
        <AboutOverview />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
