import {DetailedHTMLProps, ButtonHTMLAttributes} from 'react'

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   children: React.ReactNode;
   apperance: 'primary' | 'ghost';
};