import "./App.css";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import LocationScreen from "./pages/location/location";
import Header from "./pages/shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <LocationScreen />
    </div>
  );
}

export default App;
