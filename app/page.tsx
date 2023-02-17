import Button from "@/components/button/Button";
import Htag from "@/components/htag/Htag";
import Ptag from "@/components/p/P";
import React from "react";
import classes from "../styles/page.module.scss";

const Home: React.FC = (): JSX.Element => {
   return (
      <div className={classes.container}>
         <header className={classes.header}>HEADER</header>
         <main className={classes.content}>
            <Htag tag="h1">Это компонент htag</Htag>
            <Ptag size='l'>Это текст тега р!</Ptag>
            <Button apperance="primary" arrow="right">полдтапи</Button>
            <Button apperance="ghost" arrow="down">полдтапи</Button>
         </main>
         <footer className={classes.footer}>FOOTER</footer>
      </div>
   );
};

export default Home;
