// Material UI Components

import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const UserOrganizations = ({ orgs }: { orgs: any[] }) => {

  return (
    <Paper elevation={5}>
      <h3>Organizations</h3>
      {orgs[0] === null ? (
        <CircularProgress />
      ) : orgs.length !== 0 ? (
        <List>
          {orgs.map((org, index) => {
            return (
              <ListItem
                button
                component="a"
                href={`https://github.com/${org.login}`} // Writing the base URL to avoid more API calls than needed
                key={index}
              >
                <ListItemAvatar>
                  <Avatar src={org.avatar_url} alt={org.login} />
                </ListItemAvatar>
                <ListItemText primary={org.login} secondary={org.description} />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>
          It seems this user has no organizations...
        </p>
      )}
    </Paper>
  );
};

export default UserOrganizations;
