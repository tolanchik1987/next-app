import cn from "classNames";
import { FC } from "react";
import { ITagProps } from "./Tag.props";
import classes from "./Tag.module.scss";

const Tag: FC<ITagProps> = ({
   size,
   color = "ghost",
   href,
   children,
   className,
   ...props
}) => {
   return (
      <div
         className={cn(classes.tag, className, {
            [classes.s]: size == "s",
            [classes.m]: size == "m",
            [classes.ghost]: color == "ghost",
            [classes.red]: color == "red",
            [classes.grey]: color == "grey",
            [classes.green]: color == "green",
            [classes.ghost]: color == "primary",
         })}
         {...props}
      >
         {href ? <a href={href}>{children}</a> : <>{children}</>}
      </div>
   );
};

export default Tag;
