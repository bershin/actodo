import {useState} from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./index.css"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
function App() {
  const [users,setusers] = useState([{
    user: "john",
    pass: "123"
  }])
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setusers={setusers}/>}/>
        <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}/>
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
