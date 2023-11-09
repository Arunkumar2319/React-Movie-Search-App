import { Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FavoriteMovies from "./pages/FavouriteMovies";
import Home from './components/Home';
import Login from "./pages/Login";
import GeneralUserMovies from "./pages/GeneralUserMovies";
import NavBar from "./components/Nav-Bar";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<GeneralUserMovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favourites" element={<FavoriteMovies />} />
      <Route path="/new-nav" element={<NavBar />} />

    </Routes>
  );

}

export default App;
