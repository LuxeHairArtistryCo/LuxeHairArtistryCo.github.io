import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Header from "./components/Header";

import "./App.css";
import Home from "./views/home";
import About from "./views/about";
import Services from "./views/services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Services />} path="/services" />
        </Routes>
        <Header rootClassName="rootClassName10" />
      </BrowserRouter>

      <Alert>Hello There World!</Alert>
      <Button onClick={() => console.log("Button Clicked")} color="success">
        I am Button
      </Button>
    </div>
  );
}

export default App;
