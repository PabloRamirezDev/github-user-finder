import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "2rem 0"
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  anchor: {
    textDecoration: "none",
    color: "#383838",
    fontSize: "1.1rem",
    transitionDuration: "0.3s",
    "&:hover": {
      color: "#656565"
    }
  },
});

const AppFooter = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container fixed className={classes.container}>
        <a
          href="https://github.com/PabloRamirezDev"
          target="_blank"
          rel="noreferrer"
          className={classes.anchor}
        >
          Created by Pablo Ramírez Dev
        </a>
      </Container>
    </footer>
  );
};

export default AppFooter;
