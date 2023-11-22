import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FavoriteMovies from "./pages/FavouriteMovies";
import Home from './components/Home';
import Login from "./pages/Login";
import GeneralUserMovies from "./pages/GeneralUserMovies";
import Membership from "./components/Membership";

const App = () => {
  const userData = useSelector((store) => store.credentials.credentialDetails);

  const userRoles = {
    premiumMember : 'premium_member',
    member: 'member'
  }

  return (
    <Routes>
      <Route path="/" element={<GeneralUserMovies />} />
      <Route path="/login" element={<Login />} />
      {userData?.role === (userRoles.premiumMember || userRoles.member) ? (
        <Route path="/home" element={<Home />} />
      ): (
        <Route path="/home" element={<Navigate to="/" />} />
      )} 
      {userData?.role === (userRoles.premiumMember || userRoles.member) ? (
        <Route path="/favourites" element={<FavoriteMovies />} />
      ): (
        <Route path="/favourites" element={<Navigate to="/home" />} />
      )}     
      {userData?.role === userRoles.premiumMember ? (
        <Route path="/membership" element={<Membership />} />
      ): (
        <Route path="/membership" element={<Navigate to="/home" />} />
      )}      
      <Route path="*" element={<Navigate to="/" replace />
      }
    />
    </Routes>
  );

}

export default App;
