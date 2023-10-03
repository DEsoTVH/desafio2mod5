import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./MyContext";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <Provider>
        <Navbar />
        <Routes>
          <Route path="/desafio2mod5/" element={<Home />} />
          <Route path="/desafio2mod5/favorites" element={<Favorites />} />
        </Routes>
      </Provider>
    </div>
  );
};
export default App;
