import { Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';
import FavoriteMovies from "./pages/FavouriteMovies";
import Home from './components/Home';
import Login from "./pages/Login";
import GeneralUserMovies from "./pages/GeneralUserMovies";

const App = () => {
  const serviceApiUrl = 'http://localhost:8080/';

  return (
    <Routes>
      <Route path="/login" element={<Login apiUrl={serviceApiUrl}/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<GeneralUserMovies/>} />
      <Route path="/favourites" element={<FavoriteMovies />} />
    </Routes>
  );

}

export default App;
