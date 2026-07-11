import { useState } from "react";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { contactDetails } from "../data/siteData";
import "./ContactPage.css";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setStatus("Thank you for contacting WIIN. Your message has been received, and our team will respond as soon as possible.");
    event.currentTarget.reset();
  };

  return (
    <div className="page-shell">
      <main className="page-main">
        <PageHeader title="Contact WIIN" intro="We welcome opportunities to collaborate, share ideas and build solutions that create real impact." />
        <section className="contact-page">
          <div className="container contact-page__grid">
            <div className="contact-page__details">
              <div className="section-label">Let’s Connect</div>
              <h2>Start a conversation with WIIN.</h2>
              <p>Contact us to discuss research, training, industry collaboration, international engagement and other opportunities.</p>
              <div className="contact-page__detail-list">
                <a href={`mailto:${contactDetails.email}`}><Mail /><span><small>Email</small>{contactDetails.email}</span></a>
                <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}><Phone /><span><small>Telephone</small>{contactDetails.phone}</span></a>
                <div><MapPin /><span><small>Office Address</small>{contactDetails.address}</span></div>
                <a href={contactDetails.linkedinUrl} target="_blank" rel="noreferrer"><Globe2 /><span><small>LinkedIn</small>{contactDetails.linkedinLabel}</span></a>
              </div>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <h2>Send Us a Message</h2>
              <div className="contact-form__row">
                <label>Full Name<input name="name" type="text" required /></label>
                <label>Email Address<input name="email" type="email" required /></label>
              </div>
              <div className="contact-form__row">
                <label>Organisation<input name="organisation" type="text" /></label>
                <label>Subject<input name="subject" type="text" required /></label>
              </div>
              <label>Message<textarea name="message" rows="6" required /></label>
              <label className="contact-form__consent"><input type="checkbox" required />I agree that WIIN may use the information provided to respond to my enquiry.</label>
              <button className="button button--primary" type="submit">Send Message</button>
              {status && <p className="contact-form__status" role="status">{status}</p>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
