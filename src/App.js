import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Gallery, ToDo, Post, Profile } from "./pages";
import { Sidebar, Navbar } from "./components";
function App() {
  return (
    <div className="container">
      <div className="dasebord">
        <div className="menu">
          <Sidebar />
        </div>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/*" element={<Profile />} />
            <Route path="post" element={<Post />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="todo" element={<ToDo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
