import { Noto_Sans } from "@next/font/google";
import { IHeaderProps } from "./Header.props";
import classes from "./Header.module.scss";

const Header: React.FC<IHeaderProps> = ({ children, className, ...props }): JSX.Element => {
   return (
      <div className={className} {...props}>
         HEADER
      </div>
   );
};

export default Header;
