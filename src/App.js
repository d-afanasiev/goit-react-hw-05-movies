import { Switch, Route } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import Container from "./components/Container";
import AppBar from "./components/AppBar";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

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
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
