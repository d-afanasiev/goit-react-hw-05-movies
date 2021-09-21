import { Switch, Route } from "react-router";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import HomePage from "./views/HomePage";
import "./App.css";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies"></Route>
      </Switch>
    </Container>
  );
}

export default App;
