import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ArtistsView from "./views/ArtistsView";
import { Colors, Images, Global } from "./global";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App" style={{ background: Colors.tertiary }}>
        <Header logoPath={Images.logo_light} />
        <Routes>
          <Route element={<HomeView />} path="/" />
          <Route element={<AboutView />} path="/about" />
          <Route element={<ArtistsView />} path="/artists" />
        </Routes>
        <Footer
          logoPath={Images.logo_light}
          hoursOfOp={Global.hoursOfOp}
          contactInfo={Global.contactInfo}
        />
      </div>
    </HashRouter>
  );
}

export default App;
