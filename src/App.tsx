import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Tutorials from '@/pages/Tutorials';
import Links from '@/pages/Links';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
}
