import { Noto_Sans } from "@next/font/google";
import { ILayoutProps } from "./layout.props";
import classes from "./layout.module.scss";
import "../styles/globals.css";
import Header from "@/layout/Header/Header";
import Sidebar from "@/layout/Sidebar/Sidebar";
import Footer from "@/layout/Footer/Footer";
// import { FunctionComponent } from "react";

// export const withLayout = <T extends Record<string, unknown>>(                  //!     H O C
//    Component: FunctionComponent<T>
// ) => {
//    return function withLayoutComponent(props: T):JSX.Element {
//       return (
//          <RootLayout>
//             <Component {...props} />;
//          </RootLayout>
//       );
//    };
// };

const notoSans = Noto_Sans({ weight: ["300", "400", "500", "700"] });

const RootLayout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
   return (
      <html lang="ru" className={notoSans.className}>
         <head />
         <body>
            <Header />
            <div className={classes.wrapper}>
               <Sidebar />
               <div className={classes.content}>{children}</div>
            </div>
            <Footer />
         </body>
      </html>
   );
};

export default RootLayout;
