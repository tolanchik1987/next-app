import { ISidebarProps } from "./Sidebar.props";
import classes from "./Sidebar.module.scss";

const Sidebar: React.FC<ISidebarProps> = ({ children, className, ...props }): JSX.Element => {
   return (
      <div className={className} {...props}>
         SIDEBAR
      </div>
   );
};

export default Sidebar;
