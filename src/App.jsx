import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import PicturesProvider from "./PicturesContext";

const App = () => {
  return (
    <div>
      <PicturesProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </PicturesProvider>
    </div>
  );
};
export default App;
