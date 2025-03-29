import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
    console.log("Dark mode is now:", !darkMode);
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
