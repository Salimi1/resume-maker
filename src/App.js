import { Route, Routes, Navigate } from "react-router-dom";
//Components
import Home from "./components/Home";
import MakeResume from "./components/MakeResume";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='*' element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home />}/>
          <Route path="/vorlagen/:name" element={<MakeResume />} />
        </Routes>
    </div>
  );
}

export default App;
