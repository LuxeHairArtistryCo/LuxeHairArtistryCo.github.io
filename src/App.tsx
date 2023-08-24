import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";
import Home from "./views/home";
import About from "./views/about";
import Services from "./views/services";

declare global {
  const logo_200px: "/luxehairartistrylogo_transparent-200h.png";
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route
            element={
              <Services
                img_src={"/luxehairartistrylogo_transparent-200h.png"}
              />
            }
            path="/services"
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
