import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return <div className="page-shell"><Header /><main className="not-found"><div><strong>404</strong><h1>Page not found</h1><p>The page you requested does not exist.</p><Link className="button button--primary" to="/">Return Home</Link></div></main><Footer /></div>;
}
