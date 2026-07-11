import Footer from "../components/Footer";
import LatestNews from "../components/LatestNews";
import PageHeader from "../components/PageHeader";

export default function NewsPage() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <PageHeader title="News" intro="Follow WIIN’s latest developments, institutional milestones, events and media coverage." />
        <LatestNews full />
      </main>
      <Footer />
    </div>
  );
}
