import "./App.css";
import About from "./pages/about/about";
import Amenities from "./pages/amenities/Amenities";
import Footer from "./pages/footer/footer";
import Home from "./pages/home/home";
import LocationScreen from "./pages/location/location";
import Header from "./pages/shared/Header";
import Timer2 from "./pages/timeplan/Timeplan";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <LocationScreen />
      <Amenities />
      <Timer2 />
      <Footer />
    </div>
  );
}

export default App;
