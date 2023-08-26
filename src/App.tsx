import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ArtistsView from "./views/ArtistsView";
import { Global } from "./global";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header logoPath={Global.logo_200px} />
        <Routes>
          <Route element={<HomeView />} path="/" />
          <Route element={<AboutView />} path="/about" />
          <Route element={<ArtistsView />} path="/artists" />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
