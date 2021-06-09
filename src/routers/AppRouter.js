import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MoviesIncApp } from "../MoviesIncApp";
import { DetailMovieView } from "../views/detail/DetailMovieView";
import { FavoriteMovieView } from "../views/favorites/FavoriteMovieView";
import { RecommendationsMovieView} from "../views/recommendations/RecommendationsMovieView"


export const AppRouter = () => {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={ MoviesIncApp } />
            <Route exact path="/movie/:id" component={ DetailMovieView } />
            <Route exact path="/movie/recommendations/:id" component={ RecommendationsMovieView } />
            <Route exact path="/favorites/" component={ FavoriteMovieView } />
          </Switch>
        </>
      </Router>
    );
  }
  