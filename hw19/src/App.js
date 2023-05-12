import NavBar from "./elements/NavBar";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Publication from "./pages/publication/Publication";
import Photo from "./pages/photo/Photo";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (<div>
    <NavBar />
    <Routes>
      <Route path="photo" element={<Photo />} />
      <Route path="publication" element={<Publication />} />
      <Route path="profile" element={<Profile />} />
      <Route index element={<Home />} />
    </Routes></div>
  );
}

export default App;
