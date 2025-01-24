import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { LearningOutcomes } from '../components/LearningOutcomes';
import { Advantages } from '../components/Advantages';
import { RoadmapSection } from '../components/LearningRoadmap/RoadmapSection';
import { Projects } from '../components/Projects';
import { ChartSection } from '../components/SalaryChart/ChartSection';
import { FAQ } from '../components/FAQ';
// import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <LearningOutcomes />
      <Advantages />
      <RoadmapSection />
      <Projects />
      <ChartSection />
      <FAQ />
      {/* <Testimonials /> */}
      <ContactForm />
    </main>
  );
}