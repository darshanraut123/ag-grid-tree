import { JSX } from "react";
import "./App.css";
import Home from "./routes/Home/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  return (
    <div className="theme_off_white">
      <Home />
    </div>
  );
}

export default App;
