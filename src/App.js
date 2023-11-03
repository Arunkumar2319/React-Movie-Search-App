import { Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';
import FavoriteMovies from "./pages/FavouriteMovies";
import Home from './components/Home';
import Login from "./pages/Login";

// // require database connection 
// const dbConnect = require("./db/dbConnect");

// // execute database connection 
// dbConnect();
function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/favourites" element={<FavoriteMovies />} />
    </Routes>
  );

}

export default App;
