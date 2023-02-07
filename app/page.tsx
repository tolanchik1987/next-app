import Button from "@/components/button/Button";
import Htag from "@/components/htag/Htag";
import React from "react";
import classes from "../styles/page.module.scss";

const Home: React.FC = (): JSX.Element => {
   return (
      <div className={classes.container}>
         <header className={classes.header}>HEADER</header>
         <main className={classes.content}>
            <Htag tag="h1">Это компонент htag</Htag>
            <Button apperance="primary">полдтапи</Button>
            <Button apperance="ghost">полдтапи</Button>
         </main>
         <footer className={classes.footer}>FOOTER</footer>
      </div>
   );
};

export default Home;
