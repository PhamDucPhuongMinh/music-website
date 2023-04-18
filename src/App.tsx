import React from "react";

// Reset CSS
import "normalize.css";

// CSS Swipper
import "swiper/css/bundle";

// CSS Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// CSS Toast
import "react-toastify/dist/ReactToastify.css";

// CSS App
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <p style={{ fontSize: "1.6rem" }}>beats</p>
    </div>
  );
};

export default App;
