import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import LaunchPage from "./pages/LaunchPage";
import NotFoundPage from "./pages/NotFoundPage";
import LaunchedPage from "./pages/LaunchedPage";

const pageMeta = {
  "/": ["WIIN Institute of Technology | Intelligence for a Connected Future", "WIIN advances digital innovation through training and research, with industry collaboration and international partnerships."],
  "/about": ["About WIIN Institute of Technology", "Learn about WIIN’s purpose, mission and approach to research, training, technology development and collaboration."],
  "/news": ["WIIN News and Updates", "Read the latest news, events, institutional developments and media coverage from WIIN Institute of Technology."],
  "/contact": ["Contact WIIN Institute of Technology", "Contact WIIN to discuss research, training, industry collaboration, international engagement and other opportunities."],
  "/news/wiin-launch-16-july-2026": ["WIIN Institute of Technology Launch – 16 July 2026", "Launch details for WIIN Institute of Technology on 16 July 2026."],
  "/news/wiin-launched-16-july-2026": ["WIIN Institute of Technology Launched – 16 July 2026", "Details about the launch of WIIN Institute of Technology on 16 July 2026."],
};

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const [title, description] = pageMeta[pathname] || ["WIIN Institute of Technology", "Intelligence for a Connected Future."];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news/wiin-launch-16-july-2026" element={<LaunchPage />} />
        <Route path="/news/wiin-launched-16-july-2026" element={<LaunchedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
