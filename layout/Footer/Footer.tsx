import classes from "./Footer.module.scss";
import { IFooterProps } from "./Footer.props";

const Footer: React.FC<IFooterProps> = (): JSX.Element => {
   return (
      <div className={classes.footer}>
         FOOTER
      </div>
   );
};

export default Footer;
