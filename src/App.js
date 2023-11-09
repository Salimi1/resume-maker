//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Vorlagen from "./components/Vorlagen";
import Vorteilen from "./components/Vorteilen";
import Footer from "./components/Footer";
//redux
// import { Provider } from "react-redux";
// import store from "./redux/store";
function App() {
  return (
    <div style={{backgroundImage: 'url(https://imagizer.imageshack.com/img924/9695/Czr9ke.png)'}} className="App">
        <Navbar />
        <Header />
        <Vorlagen />
        <Vorteilen />
        <Footer />
    </div>
  );
}

export default App;
