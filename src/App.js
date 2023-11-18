import { Route, Routes, Navigate } from "react-router-dom";
//redux
import store from "./redux/store";
import { Provider } from "react-redux";
//Components
import Home from "./components/Home";
import MakeResume from "./components/MakeResume";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='*' element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home />}/>
          <Route path="/:type/:name/edit/:what" element={<MakeResume />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
