import { Noto_Sans } from "@next/font/google";
import { ILayoutProps } from "./layout.props";
import classes from "./layout.module.scss";
import "../styles/globals.css";
import Header from "@/layout/Header/Header";
import Sidebar from "@/layout/Sidebar/Sidebar";
import Footer from "@/layout/Footer/Footer";
import cn from "classNames";
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
            <div className={classes.page}>
               <div className={classes.header}>
                  <Header />
               </div>
               {/* <div className={classes.wrapper}> */}
               <div className={classes.sidebar}>
                  <Sidebar />
               </div>
               <div className={classes.content}>{children}</div>
               {/* </div> */}
               <div className={classes.footer}>
                  <Footer />
               </div>
            </div>
         </body>
      </html>
   );
};

export default RootLayout;
