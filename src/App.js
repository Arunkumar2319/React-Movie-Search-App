import { Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';
import FavoriteMovies from "./pages/FavouriteMovies";
import Home from './components/Home';
import Login from "./pages/Login";

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
