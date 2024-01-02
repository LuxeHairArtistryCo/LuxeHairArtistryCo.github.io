import { Routes, Route, HashRouter } from "react-router-dom";
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
    <div className="App" style={{ background: Colors.tertiary }}>
      <HashRouter>
        <Header logoPath={Images.logo} />
        <Routes>
          <Route element={<HomeView />} path="/" />
          <Route element={<AboutView />} path="/about" />
          <Route element={<ArtistsView />} path="/artists" />
        </Routes>
        <Footer
          logoPath={Images.logo}
          hoursOfOp={Global.hoursOfOp}
          contactInfo={Global.contactInfo}
        />
      </HashRouter>
    </div>
  );
}

export default App;
