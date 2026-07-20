import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import News from '@/pages/News';
import More from '@/pages/More';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/news" replace />} />
          <Route path="/news" element={<News />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<Navigate to="/news" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
