import { Route, Switch } from "react-router";

import "./App.css";
import MainNavigation from "./components/layout/MainNavigation";
import FavoritesPage from "./pages/Favorites";
import Top100MoviesPage from "./pages/Top100Movies";

function App() {


  return (
    <div className="app">
      <MainNavigation />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <Top100MoviesPage />
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
