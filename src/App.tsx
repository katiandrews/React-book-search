import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import "./style.css";

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/details/:id" component={Details} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};
