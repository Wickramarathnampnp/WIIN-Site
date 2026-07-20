import { useEffect, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";

import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import launchedImage from "../assets/launched.jpeg";
import "./LaunchedPage.css";

/*
  Automatically imports every supported image inside:
  src/assets/launch-gallery/

  Recommended names:
  launch-01.jpg, launch-02.jpg ... launch-20.jpg
*/
const galleryModules = import.meta.glob(
  "../assets/launch-gallery/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = Object.entries(galleryModules)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, {
      numeric: true,
    })
  )
  .map(([path, src], index) => ({
    id: path,
    src,
    alt: `WIIN Institute of Technology official launch event photograph ${
      index + 1
    }`,
  }));

export default function LaunchedPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const isLightboxOpen = selectedImageIndex !== null;
  const selectedImage = isLightboxOpen
    ? galleryImages[selectedImageIndex]
    : null;

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

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
                className="launch-page__featured-image"
                src={launchedImage}
                alt="Officials and distinguished guests at the WIIN Institute of Technology launch event held at TRACE Expert City on 16 July 2026."
              />

              <h2>
                A milestone for Sri Lanka&apos;s digital innovation ecosystem.
              </h2>

              <p>
                <strong>Colombo, Sri Lanka – 16 July 2026</strong> – The
                Wireless Intelligence and Innovation (WIIN) Institute of
                Technology was officially launched at TRACE Expert City,
                marking a significant step forward in strengthening Sri
                Lanka&apos;s digital economy and innovation ecosystem.
              </p>

              <p>
                The launch was graced by Hon. Eranga Weeraratne, Deputy
                Minister of Digital Economy; His Excellency Mr. Santosh Jha,
                High Commissioner of India to Sri Lanka; Mr. Waruna Sri
                Dhanapala, Secretary to the Ministry of Digital Economy; and
                Dr. Hans Wijayasuriya, Senior Consultant to the President on
                Digital Economy. During the ceremony, the official WIIN
                website was declared open by the Deputy Minister.
              </p>

              <p>
                Operating under the theme{" "}
                <strong>&quot;Intelligence for a Connected Future,&quot;</strong>{" "}
                WIIN will bring together researchers and engineers to develop
                innovative solutions for the telecom, energy, construction,
                fintech and healthcare sectors while also offering customised
                training programmes with strong integration of Artificial
                Intelligence (AI) and Machine Learning (ML).
              </p>

              <p>
                The institute&apos;s research initiatives will be supported by
                collaborations with the 6G Flagship Program at the University
                of Oulu, Finland, the Department of Electrical Engineering at
                IIT Madras, IITM Pravartak and leading engineering faculties
                across Sri Lanka, strengthening international research and
                industry partnerships.
              </p>

              <p>
                The event featured addresses from Prof. David Koilpillai (IIT
                Madras), Dr. Shankar Raman (CEO, IITM Pravartak), Prof. Nandana
                Rajatheva (University of Oulu), Prof. Kithsiri Liyanage
                (University of Peradeniya), Prof. Dileeka Dias (University of
                Moratuwa) and Dr. Dileepa Marasinghe (University of Oulu), who
                presented WIIN&apos;s strategic vision and collaborative
                roadmap.
              </p>

              <p>
                The launch attracted distinguished representatives from
                government, academia and industry, including senior university
                academics, technology leaders, corporate executives and
                professionals from the telecom, energy, finance and digital
                technology sectors.
              </p>

              <p>
                WIIN aims to become a trusted regional institute for research,
                talent development and industry collaboration, bridging global
                research with local industry applications. The institute was
                founded by Prof. Nandana Rajatheva, Prof. Kithsiri Liyanage,
                Prof. Dileeka Dias and Mr. Prabhath Ambegoda, former COO of Sri
                Lanka Telecom PLC.
              </p>
            </div>

            <aside className="launch-page__aside">
              <h2>Event Highlights</h2>

              <div>
                <CalendarDays aria-hidden="true" />
                <span>
                  <small>Date</small>
                  16 July 2026
                </span>
              </div>

              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <small>Venue</small>
                  TRACE Expert City, Colombo
                </span>
              </div>
            </aside>
          </div>

          {galleryImages.length > 0 && (
            <section
              className="launch-gallery container"
              aria-labelledby="launch-gallery-title"
            >
              <div className="launch-gallery__heading">
                <div>
                  <span className="launch-gallery__eyebrow">
                    Event Photography
                  </span>

                  <h2 id="launch-gallery-title">Launch Event Gallery</h2>

                  <p>
                    Highlights from the official launch of the WIIN Institute
                    of Technology at TRACE Expert City, Colombo.
                  </p>
                </div>

                <span className="launch-gallery__count">
                  {galleryImages.length} Photos
                </span>
              </div>

              <div className="launch-gallery__grid">
                {galleryImages.map((image, index) => (
                  <button
                    className="launch-gallery__item"
                    type="button"
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`Open event photograph ${index + 1}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />

                    <span className="launch-gallery__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="launch-gallery__overlay">
                      View photo
                    </span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />

      {isLightboxOpen && selectedImage && (
        <div
          className="launch-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Launch event photo viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <button
            className="launch-lightbox__close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
          >
            <X />
          </button>

          {galleryImages.length > 1 && (
            <button
              className="launch-lightbox__navigation launch-lightbox__navigation--previous"
              type="button"
              onClick={showPreviousImage}
              aria-label="Show previous photograph"
            >
              <ChevronLeft />
            </button>
          )}

          <figure className="launch-lightbox__content">
            <img src={selectedImage.src} alt={selectedImage.alt} />

            <figcaption>
              <span>WIIN Official Launch</span>
              <span>
                {selectedImageIndex + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>

          {galleryImages.length > 1 && (
            <button
              className="launch-lightbox__navigation launch-lightbox__navigation--next"
              type="button"
              onClick={showNextImage}
              aria-label="Show next photograph"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
}