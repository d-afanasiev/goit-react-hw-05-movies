import { Switch, Route } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import NotFoundView from "./views/NotFoundView";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "homepage-view" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "moviespage-view" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /* webpackChunkName: "moviedetailspage-view" */
  )
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="Circles"
            color="rgb(56, 56, 56)"
            height={100}
            width={100}
            timeout={2000}
          />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
