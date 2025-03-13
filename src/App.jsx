import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventListingPage from './pages/EventPage';

const AppRoutes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/EventPage" element={<EventListingPage initialTab={initialTab} />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
