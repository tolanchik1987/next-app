import classes from "./Button.module.scss";
import cn from "classNames";
import React from "react";
import { IButtonProps } from "./Button.props";
import ArrowIcon from './arrow_button.svg'

const Button: React.FC<IButtonProps> = ({ children, arrow = 'none', apperance, ...props }) => {
   return (
      <button
         className={cn(classes.button, {
            [classes.primary]: apperance == "primary",
            [classes.ghost]: apperance == "ghost",
         })}
         {...props}
      >
         {children}
         {arrow !== 'none' && <span className={cn(classes.arrow, {
            [classes.down]: arrow == 'down',
         })}> <ArrowIcon /> </span>}
      </button>
   );
};

export default Button;
