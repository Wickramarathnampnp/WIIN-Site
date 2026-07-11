import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/wiin-logo.png";
import support6g from "../assets/support-6g.png";
import supportIit from "../assets/support-iit.png";
import supportPravartak from "../assets/support-pravartak.png";
import { contactDetails } from "../data/siteData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <section className="site-footer__brand">
          <img src={logo} alt="WIIN Institute of Technology" />
          <p>Advancing digital innovation through training and research, with industry collaboration and international partnerships.</p>
          <small>© 2026 WIIN Institute of Technology.<br />All Rights Reserved.</small>
        </section>

        <section className="site-footer__column">
          <h2>Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </section>

        <section className="site-footer__column site-footer__contact">
          <h2>Contact Us</h2>
          <a href={`mailto:${contactDetails.email}`}><Mail size={19} />{contactDetails.email}</a>
          <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}><Phone size={19} />{contactDetails.phone}</a>
          <span><MapPin size={20} />{contactDetails.address}</span>
          <a href={contactDetails.linkedinUrl} target="_blank" rel="noreferrer"><Globe2 size={19} />{contactDetails.linkedinLabel}</a>
        </section>

        <section className="site-footer__column site-footer__support">
          <h2>Supported By</h2>
          <a href="https://www.6gflagship.com/" target="_blank" rel="noreferrer"><img src={support6g} alt="6G Flagship, University of Oulu" /></a>
          <a href="https://www.iitm.ac.in/" target="_blank" rel="noreferrer"><img src={supportIit} alt="Indian Institute of Technology Madras" /></a>
          <a href="https://iitmpravartak.org.in/" target="_blank" rel="noreferrer"><img src={supportPravartak} alt="IITM Pravartak Technologies Foundation" /></a>
        </section>
      </div>
    </footer>
  );
}
