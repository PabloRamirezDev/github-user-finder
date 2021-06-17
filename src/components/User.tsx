import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Custom Components

import UserInfo from "./UserInfo";
import UserRepositories from "./UserRepositories";
import UserOrganizations from "./UserOrganizations";

// Material UI Components

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  split: {
    "& > *": {
      padding: "20px",
      margin: "15px 0"
    },
    "& > * > h3": {
      fontSize: "1.4rem",
      textAlign: "center",
    },
    "& > * > p": {
      textAlign: "center",
      margin: "30px 0",
      color: "#777"
    }
  },
  "@media(min-width:960px)": {
    split: {
      margin: "40px 0",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      "& > *": {
        width: "50%",
        margin: "0 10px",
      },
    },
  },
});

const User = () => {
  const classes = useStyles();

  // User Page State
  const [user, setUser] = useState<any>(null); // User data from API
  const [repos, setRepos] = useState<any[]>([null]); // Repositories data from API
  const [orgs, setOrgs] = useState<any[]>([null]); // Organizations data from API

  const { urlName } = useParams<{ urlName: string }>(); // Get the user name from the url parameter

  useEffect(() => {
    // Load user data when page loads
    (async () => {
      try {
        const q = await axios.get(`https://api.github.com/users/${urlName}`);
        setUser(q.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [urlName]);

  useEffect(() => {
    // Load repositories and organizations when user data is received
    (async () => {
      try {
        const qRepos = await axios.get(user.repos_url + "?per_page=10");
        const qOrgs = await axios.get(user.organizations_url + "?per_page=10");
        setRepos(qRepos.data);
        setOrgs(qOrgs.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user]);

  return (
    <Container fixed className={classes.root}>
      {user === null ? (
        <CircularProgress />
      ) : (
        <>
          <UserInfo user={user} />
          <div className={classes.split}>
            <UserRepositories repos={repos} />
            <UserOrganizations orgs={orgs} />
          </div>
        </>
      )}
    </Container>
  );
};

export default User;
