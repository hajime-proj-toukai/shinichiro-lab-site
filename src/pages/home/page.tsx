
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import MembersSection from './components/MembersSection';
import ResearchSection from './components/ResearchSection';
import PublicationsSection from './components/PublicationsSection';
import AccessSection from './components/AccessSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewsSection />
      <MembersSection />
      <ResearchSection />
      <PublicationsSection />
      <AccessSection />
    </div>
  );
}