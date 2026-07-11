import { ArrowRight, BookOpen, Globe2, Lightbulb, Network, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { focusAreas } from "../data/siteData";
import "./AboutOverview.css";

const icons = {
  research: Network,
  education: BookOpen,
  industry: UsersRound,
  international: Globe2,
  impact: Lightbulb,
};

export default function AboutOverview() {
  return (
    <section className="about-overview" id="about">
      <div className="container about-overview__grid">
        <article className="about-overview__intro">
          <div className="section-label">About WIIN</div>
          <h2>Advancing Innovation.<br />Creating Impact.</h2>
          <p>
            WIIN is an independent institute of technology dedicated to advancing digital innovation through training, research, education and technology development. We work with industry, academia and international collaborators to create knowledge, build capability, and deliver real-world impact.
          </p>
          <Link className="button button--light-outline" to="/about">More About WIIN <ArrowRight size={18} /></Link>
        </article>

        <div className="about-overview__areas">
          {focusAreas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <article className="focus-card" key={area.title}>
                <Icon className="focus-card__icon" size={58} strokeWidth={1.45} />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="focus-card__accent" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
