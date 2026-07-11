import { CalendarDays, MapPin, UsersRound } from "lucide-react";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import launchImage from "../assets/launch.png";
import "./LaunchPage.css";

export default function LaunchPage() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <PageHeader title="WIIN Institute of Technology Launch" intro="16 July 2026" />
        <article className="launch-page">
          <div className="container launch-page__grid">
            <div className="launch-page__main">
              <img src={launchImage} alt="WIIN Institute of Technology launch event graphic for 16 July 2026." />
              <h2>A new platform for digital innovation, training and research.</h2>
              <p>WIIN Institute of Technology will be formally launched on 16 July 2026, bringing together representatives from government, academia, research institutions and industry.</p>
              <p>The event will be attended by the Deputy Minister of Digital Economy, the High Commissioner of India and national and international delegates, including representatives from 6G Flagship and the University of Oulu, IIT Madras, IITM Pravartak, local universities and industry.</p>
              <p>The launch will introduce WIIN’s institutional purpose, initial activities and ambition to advance digital innovation through training, research, industry collaboration and international engagement.</p>
            </div>
            <aside className="launch-page__aside">
              <h2>Event Information</h2>
              <div><CalendarDays /><span><small>Date</small>16 July 2026</span></div>
              <div><MapPin /><span><small>Venue & Time</small>To be confirmed</span></div>
              <div><UsersRound /><span><small>Registration</small>Details to be announced</span></div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
