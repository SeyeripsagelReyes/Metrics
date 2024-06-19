import "./SideBar.scss";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import RuleIcon from '@mui/icons-material/Rule';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Theme1 from './Theme/Theme'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Brains</span>
        <div className="description">No brains</div>
      </div>
      <hr />
      
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <AssessmentIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PeopleIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <AssignmentIcon className="icon"/>
            <span>Stories</span>
          </li>
          <li>
            <BugReportIcon className="icon"/>
            <span>Defects</span>
          </li>
          <li>
            <TaskIcon className="icon"/>
            <span>Task</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <RuleIcon className="icon"/>
            <span>Status</span>
          </li>
          <li>
            <InsertDriveFileIcon className="icon"/>
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <li>
            <AccountBoxIcon className="icon"/>
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <Theme1/>
      </div>
    </div>
  );
};

export default SideBar;
