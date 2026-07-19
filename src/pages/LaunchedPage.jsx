import { CalendarDays, MapPin, UsersRound } from "lucide-react";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import launchedImage from "../assets/launched.jpeg";
import "./LaunchPage.css";

export default function LaunchedPage() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <PageHeader
          title="WIIN Institute of Technology Officially Launched"
          intro="16 July 2026"
        />

        <article className="launch-page">
          <div className="container launch-page__grid">
            <div className="launch-page__main">
              <img
                src={launchedImage}
                alt="Officials and distinguished guests at the WIIN Institute of Technology launch event held at TRACE Expert City on 16 July 2026."
              />

              <h2>
                A milestone for Sri Lanka's digital innovation ecosystem.
              </h2>

              <p>
                <strong>Colombo, Sri Lanka – 16 July 2026</strong> – The
                Wireless Intelligence and Innovation (WIIN) Institute of
                Technology was officially launched at TRACE Expert City,
                marking a significant step forward in strengthening Sri
                Lanka's digital economy and innovation ecosystem.
              </p>

              <p>
                The launch was graced by Hon. Eranga Weeraratne, Deputy
                Minister of Digital Economy; His Excellency Mr. Santosh
                Jha, High Commissioner of India to Sri Lanka; Mr. Waruna
                Sri Dhanapala, Secretary to the Ministry of Digital
                Economy; and Dr. Hans Wijayasuriya, Senior Consultant to
                the President on Digital Economy. During the ceremony, the
                official WIIN website was declared open by the Deputy
                Minister.
              </p>

              <p>
                Operating under the theme{" "}
                <strong>"Intelligence for a Connected Future,"</strong>{" "}
                WIIN will bring together researchers and engineers to
                develop innovative solutions for the telecom, energy,
                construction, fintech and healthcare sectors while also
                offering customised training programmes with strong
                integration of Artificial Intelligence (AI) and Machine
                Learning (ML).
              </p>

              <p>
                The institute's research initiatives will be supported by
                collaborations with the 6G Flagship Program at the
                University of Oulu, Finland, the Department of Electrical
                Engineering at IIT Madras, IITM Pravartak and leading
                engineering faculties across Sri Lanka, strengthening
                international research and industry partnerships.
              </p>

              <p>
                The event featured addresses from Prof. David Koilpillai
                (IIT Madras), Dr. Shankar Raman (CEO, IITM Pravartak),
                Prof. Nandana Rajatheva (University of Oulu), Prof.
                Kithsiri Liyanage (University of Peradeniya), Prof.
                Dileeka Dias (University of Moratuwa) and Dr. Dileepa
                Marasinghe (University of Oulu), who presented WIIN's
                strategic vision and collaborative roadmap.
              </p>

              <p>
                The launch attracted distinguished representatives from
                government, academia and industry, including senior
                university academics, technology leaders, corporate
                executives and professionals from the telecom, energy,
                finance and digital technology sectors.
              </p>

              <p>
                WIIN aims to become a trusted regional institute for
                research, talent development and industry collaboration,
                bridging global research with local industry applications.
                The institute was founded by Prof. Nandana Rajatheva,
                Prof. Kithsiri Liyanage, Prof. Dileeka Dias and Mr.
                Prabhath Ambegoda, former COO of Sri Lanka Telecom PLC.
              </p>
            </div>

            <aside className="launch-page__aside">
              <h2>Event Highlights</h2>

              <div>
                <CalendarDays />
                <span>
                  <small>Date</small>
                  16 July 2026
                </span>
              </div>

              <div>
                <MapPin />
                <span>
                  <small>Venue</small>
                  TRACE Expert City, Colombo
                </span>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}