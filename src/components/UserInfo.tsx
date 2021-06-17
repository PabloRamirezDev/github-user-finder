// Material UI Components

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: "10px 0",
      },
    },
    avatar: {
      height: "300px",
      width: "300px",
      margin: "40px 0",
    },
    name: {
      fontSize: "2rem",
      fontWeight: "bolder",
    },
    username: {
      color: "#888",
    },
  };
});

const UserInfo = ({ user }: { user: any }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt={user.name}
        src={user.avatar_url}
        className={classes.avatar}
      />
      <h1 className={classes.name}>{user.name}</h1>
      <h2 className={classes.username}>{user.login}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserInfo;
