import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ArtistsView from "./views/ArtistsView";
import { Global } from "./global";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App" style={{ background: "#DAE7E1" }}>
        <Header logoPath={Global.logo_wht_1500px} />
        <Routes>
          <Route element={<HomeView />} path="/" />
          <Route element={<AboutView />} path="/about" />
          <Route element={<ArtistsView />} path="/artists" />
        </Routes>
        <Footer
          logoPath={Global.logo_wht_1500px}
          hoursOfOp={Global.hoursOfOp}
          contactInfo={Global.contactInfo}
          links={Global.links}
        />
      </div>
    </HashRouter>
  );
}

export default App;
