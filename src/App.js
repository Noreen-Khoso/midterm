

import {Home,Login,SignUp,NotFound,AdminDashboard,Post} from "./routes/routers"
import { BrowserRouter, Routes , Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/admin"  element={<AdminDashboard/>}/>
        <Route path="/post"  element={<Post/>}/>

        <Route path="*"  element={<NotFound/>}/>
      </Routes>



      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
