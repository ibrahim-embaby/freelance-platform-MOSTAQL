import Projects from "./pages/projects/Projects";
import Profile from "./pages/profile/Profile";
import { Routes, Route } from 'react-router-dom';
import AddProject from "./pages/addProject/AddProject";
import MyOffers from "./pages/myOffers/MyOffers";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<AddProject />} />
        <Route path="/bids" element={<MyOffers />} />
      </Routes>
    </>
  );
}

export default App;
