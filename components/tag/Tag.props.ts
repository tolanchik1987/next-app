import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
   size?: 's' | 'm';
   color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
   href?: string;
   children: ReactNode;
}