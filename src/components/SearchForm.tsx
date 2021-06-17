// Material UI Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "50px 0",
  },
  input: {
    margin: "15px",
  },
  button: {
    width: "35%",
  },
  "@media(max-width: 420px)": {
    root: {
      flexDirection: "column",
    },
    button: {
      width: "100%",
    },
  },
});

const SearchForm = (props: {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  const { user, setUser, handleSearch } = props;
  const classes = useStyles();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={classes.root}
    >
      <TextField
        label="Github Username"
        fullWidth
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className={classes.input}
      />
      <Button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          await handleSearch();
        }}
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        size="large"
        className={classes.button}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
