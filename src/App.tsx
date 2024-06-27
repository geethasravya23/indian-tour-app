
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components1/home/home";
import Login from "./components1/login/login";
function App(){
  return
  (<div>
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>}></Route>
      <Route path="home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
