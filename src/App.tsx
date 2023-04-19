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
import { useDispatch } from "react-redux";
import { setNavigationStatus } from "./redux/slice/configAppSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width < 768) {
    dispatch(setNavigationStatus("hidden"));
  } else {
    dispatch(setNavigationStatus("showWithoutOverlay"));
  }
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
