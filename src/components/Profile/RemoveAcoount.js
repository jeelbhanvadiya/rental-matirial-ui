import {Typography} from '@material-ui/core';
import Controls from "../controls/Controls";

const RemoveAccount = ({ onDelete }) => {
  return (
    <div className="paper3-container personal-info-container">
      <h2>Remove my profile</h2>
      <div style={{ height: "1.5rem" }}></div>
      <Typography variant="body2" gutterBottom>
        Are you sure you want to permanently delete your account? You will no
        longer be able to access Rent finder features and all your personal
        information
      </Typography>
      <div style={{ height: "1.5rem" }}></div>
      <Controls.Button text="Delete" type="submit" size="small" onClick={onDelete} />
    </div>
  );
};

export default RemoveAccount;
