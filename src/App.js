import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return(
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    </HashRouter>
  )
}

export default App;
