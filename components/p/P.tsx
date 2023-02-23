import cn from "classNames";
import { FC } from "react";
import { IPProps } from "./P.props";
import classes from "./P.module.scss";

const P: FC<IPProps> = ({ size, children, ...props }) => {
   return (
      <p
         className={cn(classes.text, {
            [classes.small]: size == "s",
            [classes.medium]: size == "m",
            [classes.large]: size == "l",
         })}
         {...props}
      >
         {children}
      </p>
   );
};

export default P;
