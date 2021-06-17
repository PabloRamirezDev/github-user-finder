import { Link } from "react-router-dom";

// Material UI Components

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    color: "#efefef",
    textDecoration: "none",
  },
  title: {
    fontWeight: "bold",
    letterSpacing: "1px"
  }
});

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container fixed>
          <Link to="/" className={classes.link}>
            <Typography variant="h5" className={classes.title}>Github User Finder</Typography>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
