import Home from "./admin1/Home";
import Viewlogo from "./admin1/Viewlogo";
import Addlogo from "./admin1/Addlogo";
import Updatelogo from "./admin1/updatelogo";
import Category from "./admin1/Category";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Arrived from './admin1/Viewarrived'
import Dispatch from './admin1/Viewdispatch'
import Pending from './admin1/Viewpending'
import Login from './admin1/login'
import Managecat from './admin1/Managecategorty'
import Managesubcat from "./admin1/Managesubcategory";
// import "./assets/css/style.css"
// import Allorder from "./admin1/Allorder.jsx";
import All from './admin1/All'
import Subcat from './admin1/subcategory'
function App() {
  return (

<>
<BrowserRouter>
<Routes>
<Route path="/viewproduct" element={<Viewlogo/>}></Route>
<Route path="/addproduct" element={<Addlogo/>}></Route>
<Route path="/updatelogo/:i" element={<Updatelogo/>}></Route>
<Route path="/category" element={<Category/>}></Route>
<Route path="/orderarrived" element={<Arrived/>}></Route>
<Route path="/orderpending" element={<Pending/>}></Route>
<Route path="/orderdispatch" element={<Dispatch/>}></Route>
<Route path="/home" element={<Home/>}></Route>
<Route path="/" element={<Login/>}></Route>
<Route path="/allorder" element={<All/>}></Route>
<Route path="/subcategory" element={<Subcat/>}></Route>
<Route path="/managecat" element={<Managecat/>}></Route>
<Route path="/managesubcat" element={<Managesubcat/>}></Route>


</Routes>
</BrowserRouter>

</>
  );
}
  //  <div className="App">
  {/* <Home/> */}
    {/* <Addlogo/> */}
   {/* <Viewlogo/> */}
    // </div>  


export default App;
