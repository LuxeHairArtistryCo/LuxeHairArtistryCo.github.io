import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Home from "./views/home";
import About from "./views/about";
import ArtistsView from "./views/ArtistsView";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<ArtistsView />} path="/artists" />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
