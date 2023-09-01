
import './App.css';
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPage from './components/adminPage/adminPage';
import AdminList from './components/adminPage/AdminLIst/adminlist';
import EditVehicle from './components/adminPage/EditVehicle/EditVehicle';
import ViewVehicle from './components/ViewVehicle/viewVehicle';


function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/admin' element={<AdminPage/>} />
      <Route path='/admin/seelist' element={<AdminList/>} />
      <Route path='/admin/update/:id' element={<EditVehicle/>} />
      <Route path="/user/:id" element={<ViewVehicle/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
