// Material UI Components

import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from '@material-ui/core/Paper';

const UserRepositories = ({ repos }: { repos: any[] }) => {
  return (
    <Paper elevation={5}>
      <h3>Repositories</h3>
      {repos[0] === null ? (
        <CircularProgress />
      ) : repos.length !== 0 ? (
        <List>
          {repos.map((repo, index) => {
            return (
              <ListItem button component="a" href={repo.html_url} key={index}>
                <ListItemText
                  primary={repo.name}
                  secondary={repo.description}
                />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>It seems this user has no repositories...</p>
      )}
    </Paper>
  );
};

export default UserRepositories;
