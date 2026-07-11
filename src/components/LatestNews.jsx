import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { newsItems } from "../data/siteData";
import "./LatestNews.css";

function CardLink({ item, children, className }) {
  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={className}>{children}</a>
  ) : (
    <Link to={item.href} className={className}>{children}</Link>
  );
}

export default function LatestNews({ full = false }) {
  return (
    <section className={`latest-news ${full ? "latest-news--full" : ""}`}>
      <div className="container">
        {!full && (
          <div className="latest-news__head">
            <h2>Latest News</h2>
            <Link to="/news">View All News <ArrowRight size={18} /></Link>
          </div>
        )}
        <div className="latest-news__grid">
          {newsItems.map((item) => (
            <article className="news-card" key={item.slug}>
              <CardLink item={item} className="news-card__image-link">
                <img src={item.image} alt={item.imageAlt} />
                <span>{item.category}</span>
              </CardLink>
              <div className="news-card__body">
                <h3><CardLink item={item}>{item.title}</CardLink></h3>
                <p>{item.summary}</p>
                <div className="news-card__footer">
                  <time><CalendarDays size={16} />{item.date}</time>
                  <CardLink item={item} className="news-card__action">{item.button} <ArrowRight size={17} /></CardLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
