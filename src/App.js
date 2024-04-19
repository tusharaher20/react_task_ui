import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import {Newsletter} from "./components/LearningApproach";
import {AboutUniversal} from "./components/AboutUniversal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Newsletter />
      <AboutUniversal />

    </div>
  );
}

export default App;
