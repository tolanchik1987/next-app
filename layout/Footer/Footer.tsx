import classes from "./Footer.module.scss";
import { IFooterProps } from "./Footer.props";
import cn from 'classNames'
import { format } from "date-fns"
import Link from "next/link";

const Footer: React.FC<IFooterProps> = ({ className, ...props }): JSX.Element => {
   return (
      <footer className={cn(className, classes.footer)} {...props}>
         <div className={classes.p1}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
         <div className={classes.p2}><Link href={'/user'} target='_blank'>Пользовательское соглашение</Link></div>
         <div className={classes.p3}>Политика конфиденциальности</div>
      </footer>
   );
};

export default Footer;
