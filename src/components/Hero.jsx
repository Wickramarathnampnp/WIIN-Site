import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import heroImage from "../assets/header.jpeg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }} aria-label="Colombo skyline and Lotus Tower visualised as a connected digital city at night.">
      <Header overlay />
      <div className="hero__shade" />
      <div className="container hero__content">
        <h1>
          <span>Intelligence</span>
          <strong>for a Connected Future</strong>
        </h1>
        <p>
          Advancing digital innovation through training and research,<br className="hero__desktop-break" /> with industry collaboration and international partnerships.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#about">Our Purpose <ArrowRight size={19} /></a>
          <Link className="button button--outline" to="/about">Learn More <ArrowRight size={19} /></Link>
        </div>
      </div>
    </section>
  );
}
