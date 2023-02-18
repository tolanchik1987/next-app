"use client";

import cn from "classNames";
import React, { FC, useEffect, useState } from "react";
import { IRaitingProps } from "./Raiting.props";
import StarIcon from "./star.svg";
import classes from "./Raiting.module.scss";

const Raiting: FC<IRaitingProps> = ({
   isEditable = false,
   raiting,
   setRaiting,
   ...props
}) => {
   const [raitingArrey, setRaitingArrey] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
   );

   useEffect(() => {
      constuctRaiting(raiting);
   }, [raiting]);

   const constuctRaiting = (currentRaiting: number) => {
      const updatedArrey = raitingArrey.map((r: JSX.Element, i: number) => {
         return (
            <span
               className={cn(classes.star, {
                  [classes.filled]: i < currentRaiting,
                  [classes.editable]: isEditable,
               })}
               onMouseEnter={() => changeDisplay(i + 1)}
               onMouseLeave={() => changeDisplay(raiting)}
               onClick={() => handleClick(i + 1)}
            >
               <StarIcon
                  tabIndex={isEditable ? 0 : -1}
                  onKeyDown={(e: KeyboardEvent) => {
                     if (e.code !== "Space") {
                        return;
                     }
                     handleClick(i + 1);
                  }}
               />
            </span>
         );
      });
      setRaitingArrey(updatedArrey);
   };

   const changeDisplay = (i: number) => {
      if (!isEditable) {
         return;
      }
      constuctRaiting(i);
   };

   const handleClick = (i: number) => {
      if (!isEditable || !setRaiting) {
         return;
      }
      setRaiting(i);
   };

   return (
      <div {...props}>
         {raitingArrey.map((r, i) => (
            <span key={i}>{r}</span>
         ))}
      </div>
   );
};

export default Raiting;
