// Custom Components

import UserPreview from "./UserPreview";

// Material UI Components

import List from "@material-ui/core/List";
import Pagination from "@material-ui/lab/Pagination";
import {makeStyles} from '@material-ui/core/styles';

// Type Models

import { GithubUserPreview } from "../models/GithubUser";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      width: "100%",
      margin: "30px 0"
    }
  },
  count: {
    fontWeight: "lighter"
  },
  showing: {
    fontWeight: "lighter",
    fontStyle: "italic",
    textAlign: "end"
  },
  pagination: {
    "& > *": {
      justifyContent: "center"
    }
  }
});

const SearchResults = ({
  results,
  count,
  page,
  handlePageNavigation,
}: {
  results: GithubUserPreview[];
  count: number;
  page: number;
  handlePageNavigation: (e: React.ChangeEvent<unknown>, page: number) => void;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.count}>
        {count === 0
          ? "There were no results for your search :("
          : count === 1
          ? "We found 1 result for your search!"
          : `We found ${count} results for your search${
              count > 1000 ? ", but only the 1000 first results are available" : ""
            }!`}
      </p>
      <p className={classes.showing}>
        Showing results {(page - 1) * 10 + 1} -{" "}
        {count < page * 10 ? count : page * 10} / {count}
      </p>
      <Pagination
        count={count > 1000 ? 100 : Math.ceil(count / 10)}
        color="primary"
        size="large"
        page={page}
        onChange={handlePageNavigation}
        className={classes.pagination}
      />
      <List>
        {results.map((result, index) => (
          <UserPreview user={result} key={index} />
        ))}
      </List>
      <Pagination
        count={count > 1000 ? 100 : Math.ceil(count / 10)}
        color="primary"
        size="large"
        page={page}
        onChange={handlePageNavigation}
        className={classes.pagination}
      />
    </div>
  );
};

export default SearchResults;
