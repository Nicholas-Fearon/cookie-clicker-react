import "./App.css";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
import Upgrades from "./components/Upgrades";
function App() {
  return (
    <>
      <Upgrades />
      <Header />
      <div className="card">
        <Clicker />
      </div>
    </>
  );
}

export default App;
