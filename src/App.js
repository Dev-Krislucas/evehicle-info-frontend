
import './App.css';
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPage from './components/adminPage/adminPage';
import AdminList from './components/adminPage/AdminLIst/adminlist';
import EditVehicle from './components/adminPage/EditVehicle/EditVehicle';
import ViewVehicle from './components/ViewVehicle/viewVehicle';
import BlogsPage from './components/Blog page/BlogsPage';
import BlogsByTag from './components/Blog page/Blogs-by-tag/blogsByTag';
import Main_BlogsByTag from './components/Blog page/Blogs-by-tag/main-blogsByTag';
import MainCreateBlog from './components/adminPage/create blog/main-create=blog';
import ViewBlogList from './components/adminPage/amin-blog list';
import MainUpdateBlog from './components/adminPage/update-blog';



function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/admin' element={<AdminPage/>} />
      <Route path='/admin/seelist' element={<AdminList/>} />
      <Route path='/admin/update/:id' element={<EditVehicle/>} />
      <Route path='admin/createblog' element={<MainCreateBlog/>} />
      <Route path = "/admin/blogs/allblogs" element ={<ViewBlogList/>}/>
      <Route path="/admin/blog/update/:id" element ={<MainUpdateBlog/>} />
      <Route path="/user/:id" element={<ViewVehicle/>} />
      <Route path="/user/blogs/:tag" element={<Main_BlogsByTag/>} />
      <Route path='user/blogs/id/:id' element={<BlogsPage/>} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
