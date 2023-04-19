import React from "react";

// Reset CSS
import "normalize.css";

// CSS Swipper
import "swiper/css/bundle";

// CSS Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// CSS Toast
import "react-toastify/dist/ReactToastify.css";

// CSS
import "./App.scss";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
