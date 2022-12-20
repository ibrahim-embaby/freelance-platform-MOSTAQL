import Projects from "./pages/projects/Projects";
import Portfolio from "./pages/portfolio/Portfolio";
import Profile from "./pages/profile/Profile";
import { Routes, Route } from 'react-router-dom';
import AddProject from "./pages/addProject/AddProject";
import MyOffers from "./pages/myOffers/MyOffers";
import Home from "./pages/home/Home";
import Footer from './components/footer/Footer'
import Topbar from './components/topbar/Topbar'
function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<AddProject />} />
        <Route path="/bids" element={<MyOffers />} />
        <Route path="/profile/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
