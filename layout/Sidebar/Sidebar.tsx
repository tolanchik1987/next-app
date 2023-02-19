import { ISidebarProps } from "./Sidebar.props";
import classes from "./Sidebar.module.scss";

const Sidebar: React.FC<ISidebarProps> = ({ children, ...props }): JSX.Element => {
   return (
      <div className={classes.container} {...props}>
         SIDEBAR
      </div>
   );
};

export default Sidebar;
