import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import "./style.css";

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </Router>
  );
};
