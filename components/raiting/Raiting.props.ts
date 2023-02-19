import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface IRaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isEditable?: boolean;
   raiting: number;
   setRaiting?: (raiting: number) => void;
}