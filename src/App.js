import { Switch, Route } from "react-router";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import "./App.css";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId"></Route>
      </Switch>
    </Container>
  );
}

export default App;
