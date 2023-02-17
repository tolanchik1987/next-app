import cn from "classNames";
import { FC } from "react";
import { IPtagProps } from "./P.props";
import classes from "./P.module.scss";

const Ptag: FC<IPtagProps> = ({ size, children }) => {
   return (
      <>
         <p
            className={cn(classes.text, {
               [classes.small]: size == "s",
               [classes.medium]: size == "m",
               [classes.large]: size == "l",
            })}
         >{children}</p>
      </>
   );
};

export default Ptag;
