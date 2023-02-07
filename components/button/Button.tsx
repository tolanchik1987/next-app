import classes from "./Button.module.scss";
import cn from "classNames";
import React from "react";
import { IButtonProps } from "./Button.props";

const Button: React.FC<IButtonProps> = ({ children, apperance, ...props }) => {
   return (
      <button
         className={cn(classes.button, {
            [classes.primary]: apperance == "primary",
            [classes.ghost]: apperance == "ghost",
         })}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
