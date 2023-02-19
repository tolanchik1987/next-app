import { Noto_Sans } from "@next/font/google";
import { IHeaderProps } from "./Header.props";
import classes from "./Header.module.scss";

const Header: React.FC<IHeaderProps> = ({ children }): JSX.Element => {
   return (
      <div className={classes.header}>
         HEADER
      </div>
   );
};

export default Header;
