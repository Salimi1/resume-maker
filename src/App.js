//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Vorlagen from "./components/Vorlagen";
//redux
// import { Provider } from "react-redux";
// import store from "./redux/store";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Vorlagen />
    </div>
  );
}

export default App;
