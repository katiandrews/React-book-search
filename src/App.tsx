import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { Details } from "./pages/Detail/Details";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import "./style.css";

export const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition timeout={250} classNames="page" key={location.key}>
          <Switch location={location}>
            <Route path="/about" exact component={About} />
            <Route path="/details/:id" component={Details} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
