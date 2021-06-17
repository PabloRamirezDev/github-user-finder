import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { Link } from 'react-router-dom';

import { GithubUserPreview } from "../models/GithubUser";

const UserPreview = ({ user }: { user: GithubUserPreview }) => {
  return (
    <>
      <ListItem button component={Link} to={`/user/${user.login}`}>
        <ListItemAvatar>
          <Avatar alt={user.login} src={user.avatar_url} />
        </ListItemAvatar>
        <ListItemText primary={user.login} />
      </ListItem>
      <Divider />
    </>
  );
};

export default UserPreview;
