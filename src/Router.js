import { BrowserRouter, Route, Router } from "react-router-dom"
import FavoriteMovies from "./components/FavouriteMovies";
import App from "./App";

const Routes = () => {
    return(
        <BrowserRouter>
        <Router>
          <Route path="/" element={<App />}>
            <Route path="favourites" element={<FavoriteMovies />} />
          </Route>
        </Router>
      </BrowserRouter>
    )
}

export default Routes;