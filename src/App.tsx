import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ArtistsView from "./views/ArtistsView";
import Footer from "./components/Footer";
import { Colors, Images, contactInfo, hoursOfOp } from "./constants";

function App() {
  return (
    <div className="App" style={{ background: Colors.tertiary }}>
      <BrowserRouter>
        <Header logoPath={Images.logo} />
        <Routes>
          <Route element={<HomeView />} path="/" />
          <Route element={<AboutView />} path="/about" />
          <Route element={<ArtistsView />} path="/artists" />
        </Routes>
        <Footer
          logoPath={Images.logo}
          hoursOfOp={hoursOfOp}
          contactInfo={contactInfo}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
