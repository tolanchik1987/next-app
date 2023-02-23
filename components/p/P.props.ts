import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IPProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   size?: 's' | 'm' | 'l';
   children: ReactNode;
}