import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Custom Components

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Search from "./components/Search";
import User from "./components/User";

// Material UI Components

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <div className={classes.root}>
        <AppHeader />
        <Switch>
          <Route path="/user/:urlName">
            <User />
          </Route>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
