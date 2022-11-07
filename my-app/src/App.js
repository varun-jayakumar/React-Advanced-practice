import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/newmeetup" element={<NewMeetup />} />
      </Routes>
    </div>
  );
}

export default App;
