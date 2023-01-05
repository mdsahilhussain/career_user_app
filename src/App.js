import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Gallery, ToDo, Post, Profile } from "./pages";
import { Sidebar, Navbar, Card } from "./components";
function App() {
  const [isCardShow, setIsCardShow] = useState(false);
  
  const toogleButton = () => {
    setIsCardShow((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="dasebord">
        <div className="menu">
          <Sidebar />
        </div>
        <div className="pages">
          <Navbar
            style={{ position: "relative" }}
            toogleButton={(e) => toogleButton()}
          />
          <div
            style={{
              position: "absolute",
              right: "3rem",
              top: "7rem",
            }}
          >
            <Card isCardShow={isCardShow} />
          </div>
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
