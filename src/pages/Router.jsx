import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import DashboardParentPage from './DashboardParent';
import ProductPage from './Product';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardParentPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*"  />
      </Routes>
    </Router>
  );
};

export default AppRouter;
