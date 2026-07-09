import * as Icons from "lucide-react";
import "./index.css";

const fallbackIcon = Icons.Circle;

const Search = Icons.Search ?? fallbackIcon;
const ArrowRight = Icons.ArrowRight ?? fallbackIcon;
const RadioTower = Icons.RadioTower ?? Icons.Antenna ?? fallbackIcon;
const Target = Icons.Target ?? fallbackIcon;
const Eye = Icons.Eye ?? fallbackIcon;
const BrainCircuit = Icons.BrainCircuit ?? Icons.Brain ?? fallbackIcon;
const Cloud = Icons.Cloud ?? fallbackIcon;
const Factory = Icons.Factory ?? Icons.Building2 ?? fallbackIcon;
const Cpu = Icons.Cpu ?? fallbackIcon;
const Users = Icons.Users ?? fallbackIcon;
const FlaskConical = Icons.FlaskConical ?? Icons.FlaskRound ?? fallbackIcon;
const Network = Icons.Network ?? fallbackIcon;
const GraduationCap = Icons.GraduationCap ?? fallbackIcon;
const ShieldCheck = Icons.ShieldCheck ?? Icons.Shield ?? fallbackIcon;
const Linkedin = Icons.Linkedin ?? fallbackIcon;
const Youtube = Icons.Youtube ?? fallbackIcon;

const researchAreas = [
  {
    icon: RadioTower,
    title: "AI-Native Wireless Networks",
    text: "Developing intelligent, autonomous communication networks.",
  },
  {
    icon: RadioTower,
    title: "6G Technologies",
    text: "Future radio access, AI-RAN, Open RAN, and cloud-native networks.",
    label: "6G",
  },
  {
    icon: Target,
    title: "Environmental Intelligence",
    text: "Wireless sensing, digital twins, localization, and context awareness.",
  },
  {
    icon: BrainCircuit,
    title: "Physical AI",
    text: "AI at the wireless edge enabling robotics and autonomous systems.",
  },
  {
    icon: Cloud,
    title: "Edge Computing",
    text: "Distributed intelligence, real-time AI inference, and cloud-edge integration.",
  },
  {
    icon: Factory,
    title: "Industry 4.0",
    text: "Private networks, smart factories, ports, healthcare, and energy systems.",
  },
];

const platforms = [
  {
    title: "AI-RAN Testbed",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
  },
  {
    title: "6G Living Lab",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200",
  },
  {
    title: "Digital Twin Platform",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
  },
  {
    title: "Wireless Test & Certification",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200",
  },
  {
    title: "Industrial Demonstrators",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200",
  },
];

const industryItems = [
  { icon: Users, title: "Research Partnerships" },
  { icon: FlaskConical, title: "Prototype Development" },
  { icon: Cloud, title: "Technology Consulting" },
  { icon: Network, title: "Network Design" },
  { icon: Cpu, title: "AI Integration" },
  { icon: GraduationCap, title: "Training Programmes" },
  { icon: Users, title: "Joint Innovation Projects" },
  { icon: ShieldCheck, title: "Testing & Validation" },
];

const news = [
  {
    type: "Research",
    title: "AI-RAN for Next-Generation Wireless Networks",
    date: "20 May 2026",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
  },
  {
    type: "Project",
    title: "Digital Twin Platform for Industrial Environments",
    date: "12 May 2026",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
  },
  {
    type: "Event",
    title: "WIIN – Industry Forum 2026 Shaping the 6G Future",
    date: "05 May 2026",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
  },
];

function Button({ children, outline = false }) {
  return (
    <button className={outline ? "btn btn-outline" : "btn btn-primary"}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span></span>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="site">
      <Header />
      <Hero />
      <About />
      <Research />
      <Innovation />
      <Industry />
      <NewsPartners />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">
          <div className="logo-main">
            W<span>ii</span>N
          </div>
          <p>Institute of Technology</p>
          <small>A Company Limited by Guarantee</small>
        </div>

        <nav>
          <a className="active">Home</a>
          <a>About</a>
          <a>Research</a>
          <a>Innovation</a>
          <a>Industry</a>
          <a>Projects</a>
          <a>News</a>
          <a>Careers</a>
          <a>Contact</a>
        </nav>

        <Search className="search" size={22} />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="network-lines"></div>

      <div className="container hero-content">
        <h1>
          Wireless Intelligence <br />
          <span>for a Connected Future</span>
        </h1>

        <p>
          Advancing AI-native wireless communications, 6G technologies, and
          digital innovation through research, industry collaboration, and
          international partnerships.
        </p>

        <div className="hero-actions">
          <Button>Explore Our Research</Button>
          <Button outline>Partner With WIIN</Button>
        </div>
      </div>

      <div className="slider-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-white">
      <div className="container about-grid">
        <div>
          <SectionLabel>About WIIN</SectionLabel>
          <h2>
            Wireless Intelligence <br />
            and Innovation (WIIN)
          </h2>
          <h3>Institute of Technology</h3>
          <p>A Company Limited by Guarantee</p>
        </div>

        <div className="about-text">
          <p>
            WIIN is an independent research and innovation institute dedicated to
            advancing next-generation wireless communications, artificial
            intelligence, sensing, and digital infrastructure.
          </p>
          <p>
            Founded through international collaboration between Sri Lanka and
            Finland, WIIN serves as a bridge between academia, industry, and
            government to accelerate technology development and national
            capability.
          </p>
          <Button outline>Read More About Us</Button>
        </div>

        <div className="mission-card">
          <div className="mission-row">
            <Target size={46} />
            <div>
              <h4>Our Mission</h4>
              <p>
                To transform wireless communications and AI research into
                real-world innovations that benefit industry, society, and the
                economy.
              </p>
            </div>
          </div>

          <div className="mission-row">
            <Eye size={46} />
            <div>
              <h4>Our Vision</h4>
              <p>
                To become South Asia’s leading institute for AI-native wireless
                communications and digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="research section-white">
      <div className="container">
        <div className="section-top">
          <SectionLabel>Research Areas</SectionLabel>
          <a>
            View All Areas <ArrowRight size={16} />
          </a>
        </div>

        <div className="research-grid">
          {researchAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="research-card" key={index}>
                {item.label ? (
                  <div className="sixg">{item.label}</div>
                ) : (
                  <Icon size={54} />
                )}

                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Innovation() {
  return (
    <section className="innovation">
      <div className="container">
        <SectionLabel>Innovation Platforms</SectionLabel>

        <div className="platform-grid">
          {platforms.map((item, index) => (
            <div
              className="platform-card"
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div>
                <RadioTower size={44} />
                <h3>{item.title}</h3>
                <span></span>
              </div>
            </div>
          ))}
        </div>

        <div className="center-link">
          Explore All Platforms <ArrowRight size={16} />
        </div>
      </div>
    </section>
  );
}

function Industry() {
  return (
    <section className="industry section-white">
      <div className="container industry-grid">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200"
          alt="Industry collaboration"
        />

        <div>
          <SectionLabel>Industry Collaboration</SectionLabel>
          <h2>
            Turning research <br />
            into deployment.
          </h2>
          <p>
            We collaborate with industry and government to co-create solutions,
            accelerate innovation, and deliver real-world impact.
          </p>
          <Button outline>Become an Industry Partner</Button>
        </div>

        <div className="industry-icons">
          {industryItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="industry-item" key={index}>
                <Icon size={28} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NewsPartners() {
  return (
    <section className="news-partners section-white">
      <div className="container news-grid">
        <div>
          <div className="section-top">
            <SectionLabel>Latest News</SectionLabel>
            <a>View All News</a>
          </div>

          <div className="news-cards">
            {news.map((item, index) => (
              <article className="news-card" key={index}>
                <img src={item.img} alt={item.title} />
                <div>
                  <span>{item.type}</span>
                  <h4>{item.title}</h4>
                  <p>{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Our Partners</SectionLabel>

          <div className="partner-grid">
            <strong>Gov</strong>
            <strong>ICTA</strong>
            <strong>SLT MOBITEL</strong>
            <strong>VTT</strong>
            <strong>University of Moratuwa</strong>
            <strong>Aalto University</strong>
            <strong>NOKIA Bell Labs</strong>
          </div>

          <div className="center-link orange">
            View All Partners <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-logo">
          <div className="logo-main">
            W<span>ii</span>N
          </div>
          <p>Institute of Technology</p>
          <small>A Company Limited by Guarantee</small>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a>About Us</a>
          <a>Research</a>
          <a>Innovation</a>
          <a>Industry</a>
          <a>Projects</a>
        </div>

        <div>
          <h4>&nbsp;</h4>
          <a>News</a>
          <a>Careers</a>
          <a>Contact</a>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>No. 123, Innovation Drive, Colombo 07, Sri Lanka</p>
          <p>info@wiin.lk</p>
          <p>+94 11 234 5678</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <Linkedin size={20} />
            <span>X</span>
            <Youtube size={20} />
          </div>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Stay updated with our latest research, events and news.</p>
          <div className="newsletter">
            <input placeholder="Your email address" />
            <button>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="container copyright">
        <p>© 2026 WIIN Institute of Technology. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
}