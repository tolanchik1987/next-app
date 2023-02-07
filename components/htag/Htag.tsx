import React from "react";
import classes from "./htag.module.scss";
import { IHtagProps } from "./Htag.props";

const Htag: React.FC<IHtagProps> = ({ tag, children }): JSX.Element => {
   return (
      <div className={classes.container}>
         {tag == "h1" ? (
            <h1 className={classes.h1}>{children}</h1>
         ) : tag == "h2" ? (
            <h2 className={classes.h2}>{children}</h2>
         ) : tag == "h3" ? (
            <h3 className={classes.h3}>{children}</h3>
         ) : (
            <></>
         )}
      </div>
   );
};

export default Htag;
