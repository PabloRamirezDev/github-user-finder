import { useEffect, useState } from "react";
import axios from "axios";

// Custom Components

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

// Material UI Components

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

// Type Models

import { GithubUserPreview } from "../models/GithubUser";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      width: "100%"
    }
  },
  title: {
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: "3rem",
    letterSpacing: "2px"
  },
});

const Search = () => {
  const classes = useStyles();

  // Search Page State

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([new GithubUserPreview()]);
  const [resultCount, setResultCount] = useState(0);
  const [resultsWereReceived, setResultsWereReceived] = useState(false);
  const [resultsPage, setResultsPage] = useState(1);
  const [queryWasSent, setQueryWasSent] = useState(false);

  // Event Handlers

  const handleSearch = async () => {
    try {
      setQueryWasSent(true);
      setResultsWereReceived(false);
      const q = await axios.get(
        `https://api.github.com/search/users?q=${query}&per_page=10&page=${resultsPage}`
      );
      setResults(q.data.items);
      setResultCount(q.data.total_count);
      setResultsWereReceived(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageNavigation = (
    e: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setResultsPage(page);
  };

  useEffect(() => {
    // Updating data when page changes
    if (resultsWereReceived) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultsPage]);

  return (
    <Container fixed className={classes.root}>
      {!resultsWereReceived ? (
        <h1 className={classes.title}>Search for a Github User</h1>
      ) : null}
      <SearchForm user={query} setUser={setQuery} handleSearch={handleSearch} />
      {queryWasSent ? (
        resultsWereReceived ? (
          <SearchResults
            count={resultCount}
            results={results}
            page={resultsPage}
            handlePageNavigation={handlePageNavigation}
          />
        ) : (
          <CircularProgress />
        )
      ) : null}
    </Container>
  );
};

export default Search;
