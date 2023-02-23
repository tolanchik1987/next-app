import { Children } from "react";
import { ILayoutProps } from "../layout.props";
import User from "./page";

const LayoutUser: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
   return (
      <div>
         {children}
      </div>
   );
};

export default LayoutUser;
