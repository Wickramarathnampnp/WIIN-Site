import { CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import "./AboutPage.css";

const values = [
  ["Our Purpose", "To create an environment where research, education and collaboration lead to meaningful technological and societal impact."],
  ["Our Vision", "To become a trusted regional institute for digital innovation, talent development and international collaboration."],
  ["Our Mission", "To advance digital innovation through training and research, with industry collaboration and international partnerships."],
];

const ways = [
  "Research and innovation to address national and global challenges.",
  "Training and education to develop future-ready talent with skills aligned to emerging technologies and industry needs.",
  "Engagement with industry, leading universities, research institutes, public sector organizations, and international partners",
  "Technology development and knowledge transfer to transform research outcomes into practical solutions and economic value.",
  "Capacity building to strengthen Sri Lanka's long-term innovation ecosystem and regional competitiveness.",
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <PageHeader title="About WIIN" intro="Advancing innovation. Building capability. Creating impact." />
        <section className="about-page">
          <div className="container">
            <div className="about-page__who">
              <div>
                <div className="section-label">Who We Are</div>
                <h2>An independent platform for knowledge, capability and real-world impact.</h2>
              </div>
              <div className="about-page__copy">
                <p>WIIN Institute of Technology is an independent institute established to advance digital innovation through research, training, education and technology development. Based in Sri Lanka and supported by international expertise, WIIN brings together academia, industry, government and global research communities to address real-world challenges and build future-ready capabilities.</p>
                <p>The institute is designed as a platform for knowledge creation, skills development, collaborative research and the translation of ideas into practical outcomes. Its work will evolve in response to national priorities, industry needs and emerging global opportunities.</p>
              </div>
            </div>

            <div className="about-page__values">
              {values.map(([title, body]) => <article key={title}><span>0{values.findIndex(v => v[0] === title)+1}</span><h3>{title}</h3><p>{body}</p></article>)}
            </div>

            <div className="about-page__work">
              <div>
                <div className="section-label">How We Work</div>
                <h2>Collaboration that turns ideas into practical value.</h2>
              </div>
              <ul>{ways.map((way) => <li key={way}><CheckCircle2 size={20} />{way}</li>)}</ul>
            </div>

            <aside className="about-page__institution">
              <h2>Institutional Description</h2>

              <p>
                <strong>Registered Legal Name:</strong>
                <br />
                WIIN Institute of Technology (Guarantee) Limited
              </p>

              <p>
                <strong>Company Registration Number:</strong>
                <br />
                GL00367875
              </p>

              <p>
                <strong>Registered Address:</strong>
                <br />
                No. 194, Havelock Road, Colombo 05, 00500
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
