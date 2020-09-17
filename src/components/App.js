import React from "react";
import { Switch, Route } from "react-router-dom";

import { CategoryProvider } from "../contexts/CategoryContext";
import { BlacklistProvider } from "../contexts/BlacklistContext";
import { SearchProvider } from "../contexts/SearchContext";
import { FavoriteProvider } from "../contexts/FavoriteContext";
import Drawer from "./Drawer";

function App() {
  return (
    <CategoryProvider>
      <BlacklistProvider>
        <SearchProvider>
          <FavoriteProvider>
            <Switch>
              <Route path="/" exact render={() => <Drawer />} />
              <Route
                path="/favorites"
                exact
                render={() => <h2>favorites</h2>}
              />
              <Route render={() => <h2>404</h2>} />
            </Switch>
          </FavoriteProvider>
        </SearchProvider>
      </BlacklistProvider>
    </CategoryProvider>
  );
}

export default App;
