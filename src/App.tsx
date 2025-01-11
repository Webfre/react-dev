import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { RoadMapPage } from './pages/RoadMapPage';
import { ContactsPage } from './pages/ContactsPage';
import { PricingPage } from './pages/PricingPage';
import { Footer2 } from './components/Footer/Footer2';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadMapPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer2/>
      </div>
    </Router>
  );
}