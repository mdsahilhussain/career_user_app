import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Gallery, ToDo, Post, Profile } from "./pages";
import { Sidebar, Navbar, Card, Chat } from "./components";
function App() {
  const [isCardShow, setIsCardShow] = useState(false);
  const [isChatShow, setIsChatShow] = useState(false);

  const toogleButton = () => {
    setIsCardShow((prevState) => !prevState);
  };

  const toogleChat = () => {
    setIsChatShow((prevState) => !prevState);
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
            <Card
              isCardShow={isCardShow}
              toogleButton={(e) => toogleButton()}
            />
          </div>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="post" element={<Post />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="todo" element={<ToDo />} />
          </Routes>
          <div
            style={{
              position: "absolute",
              right: "3rem",
              bottom: "0rem",
            }}
          >
            <Chat isChatShow={isChatShow} toogleChat={(e) => toogleChat()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
