import Header from "./Header";
import pageHeaderImage from "../assets/header.jpeg";
import "./PageHeader.css";

export default function PageHeader({ title, intro }) {
  return (
    <>
      <Header />
      <section className="page-header" style={{ backgroundImage: `url(${pageHeaderImage})` }}>
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <div className="section-label">WIIN Institute of Technology</div>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
        </div>
      </section>
    </>
  );
}
