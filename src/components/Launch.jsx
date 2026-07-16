import { useEffect, useRef, useState } from "react";
import "./Launch.css";
import logo from "../assets/launch_page_logo.png";

const STORAGE_KEY = "wiin-official-website-launched";

function GoLiveLaunch() {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [countdown, setCountdown] = useState(3);
  const timersRef = useRef([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname.replace(/\/+$/, "");

    const isLaunchRoute =
      pathname === "/go-live" || params.get("launch") === "true";

    const shouldReset =
      params.get("reset") === "true" || params.get("reset") === "1";

    if (shouldReset) {
      sessionStorage.removeItem(STORAGE_KEY);
    }

    const hasAlreadyLaunched =
      sessionStorage.getItem(STORAGE_KEY) === "true";

    if (isLaunchRoute && (!hasAlreadyLaunched || shouldReset)) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  useEffect(() => {
    function handleKeyboardLaunch(event) {
      if (
        isVisible &&
        phase === "idle" &&
        event.key.toLowerCase() === "l"
      ) {
        startLaunch();
      }
    }

    window.addEventListener("keydown", handleKeyboardLaunch);

    return () => {
      window.removeEventListener("keydown", handleKeyboardLaunch);
    };
  }, [isVisible, phase]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  function addTimer(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
  }

  function startLaunch() {
    if (phase !== "idle") {
      return;
    }

    setPhase("countdown");
    setCountdown(3);

    addTimer(() => setCountdown(2), 850);
    addTimer(() => setCountdown(1), 1700);

    addTimer(() => {
      setPhase("opening");
    }, 2550);

    addTimer(() => {
      setPhase("live");
    }, 3550);

    addTimer(() => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsVisible(false);
    }, 5200);
  }

  if (!isVisible) {
    return null;
  }

  const buttonText =
    phase === "countdown"
      ? countdown
      : phase === "opening" || phase === "live"
        ? "LIVE"
        : "LAUNCH";

  return (
    <div
      className={`go-live-overlay go-live-overlay--${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="Official WIIN website launch"
    >
      <div className="go-live-background" aria-hidden="true">
        <div className="go-live-grid" />
        <div className="go-live-glow go-live-glow--one" />
        <div className="go-live-glow go-live-glow--two" />

        <span className="go-live-particle particle-1" />
        <span className="go-live-particle particle-2" />
        <span className="go-live-particle particle-3" />
        <span className="go-live-particle particle-4" />
        <span className="go-live-particle particle-5" />
        <span className="go-live-particle particle-6" />
      </div>

      <div className="go-live-reveal-ring" aria-hidden="true" />

      <main className="go-live-content">
        <div className="go-live-brand">
          <img
            src={logo}
            alt="WIIN Institute of Technology"
            className="go-live-logo"
          />
        </div>
        <div className="go-live-divider">
            <span />
            <i />
            <span />
        </div>

        <div className="go-live-heading">
          <p className="go-live-eyebrow">Official Website Launch</p>

          <h1>WIIN Institute of Technology</h1>

          <div className="go-live-divider">
            <span />
            <i />
            <span />
          </div>

          <p className="go-live-tagline">
            Intelligence for a <strong>connected</strong> future
          </p>
        </div>

        {/* <section className="go-live-official">
          <p>Officially launched by</p>

          <h2>Hon. Eranga Weeraratne</h2>

          <span>Minister of Digital Economy</span>
        </section> */}

        <div className="go-live-button-area">
          <div className="go-live-button-orbit orbit-one" />
          <div className="go-live-button-orbit orbit-two" />
          <div className="go-live-button-orbit orbit-three" />

          <button
            type="button"
            className="go-live-button"
            onClick={startLaunch}
            disabled={phase !== "idle"}
            aria-label="Officially launch the WIIN website"
          >
            <span className="go-live-button-shine" />
            <span className="go-live-button-text">{buttonText}</span>

            {/* {phase === "idle" && (
              <span className="go-live-button-subtext">
                Officially launch website
              </span>
            )} */}
          </button>
        </div>

        <div className="go-live-status" aria-live="polite">
          {phase === "idle" && (
            <p>Press the button to officially launch wiin.lk</p>
          )}

          {phase === "countdown" && (
            <p className="go-live-countdown-message">
              Preparing for launch
            </p>
          )}

          {phase === "opening" && (
            <p className="go-live-countdown-message">
              Connecting the future
            </p>
          )}

          {phase === "live" && (
            <div className="go-live-success-message">
              <strong>WIIN is now officially live</strong>
              <span>Welcome to the future of technology education</span>
            </div>
          )}
        </div>
      </main>

      {/* <footer className="go-live-footer">
        <span>WIIN Institute of Technology</span>
        <i />
        <span>Official Website Launch</span>
      </footer> */}
    </div>
  );
}

export default GoLiveLaunch;