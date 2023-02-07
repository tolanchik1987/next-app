import { Noto_Sans } from "@next/font/google";
import "../styles/globals.css";

const notoSans = Noto_Sans({ weight: ["300", "400", "500", "700"] });

type LayoutPropsType = {
   children: React.ReactNode;
};

const RootLayout: React.FC<LayoutPropsType> = ({ children }): JSX.Element => {
   return (
      <html lang="ru" className={notoSans.className}>
         <head />
         <body>{children}</body>
      </html>
   );
};

export default RootLayout;
