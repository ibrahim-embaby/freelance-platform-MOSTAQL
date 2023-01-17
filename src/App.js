import Projects from "./pages/projects/Projects";
import Portfolio from "./pages/portfolio/Portfolio";
import Profile from "./pages/profile/Profile";
import { Routes, Route } from "react-router-dom";
import AddProject from "./pages/addProject/AddProject";
import MyOffers from "./pages/myOffers/MyOffers";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [view, setView] = useState("portfolio");
  return (
    <>
      <Topbar sidebar={sidebar} setSidebar={setSidebar} setView={setView} />
      <Routes>
        <Route path="/" element={<Home setSidebar={setSidebar} />} />
        <Route
          path="/projects"
          element={<Projects setSidebar={setSidebar} />}
        />
        <Route
          path="/profile"
          element={
            <Profile setSidebar={setSidebar} view={view} setView={setView} />
          }
        />
        <Route
          path="/create"
          element={<AddProject setSidebar={setSidebar} />}
        />
        <Route path="/bids" element={<MyOffers setSidebar={setSidebar} />} />
        <Route
          path="/profile/portfolio"
          element={
            <Portfolio setSidebar={setSidebar} view={view} setView={setView} />
          }
        />
        <Route
          path="/project/:id"
          element={<ProjectDetails setSidebar={setSidebar} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
