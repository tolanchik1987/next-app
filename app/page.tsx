"use client";

import Button from "@/components/button/Button";
import Htag from "@/components/htag/Htag";
import P from "@/components/p/P";
import Raiting from "@/components/raiting/Raiting";
import Tag from "@/components/tag/Tag";
import React, { useState } from "react";
import classes from "../styles/page.module.scss";

const Home: React.FC = (): JSX.Element => {
   const [counter, setCounter] = React.useState<number>(0);
   const [raiting, setRaiting] = useState<number>(3)

   React.useEffect(() => {}, []);

   return (
      <div className={classes.container}>
         <header className={classes.header}>HEADER</header>
         <main className={classes.content}>
            <Htag tag="h1">Это компонент htag. Счетчик: {counter}</Htag>
            <P size="l">Это текст тега р!</P>
            <Button
               apperance="primary"
               arrow="right"
               onClick={() => {
                  setCounter(counter + 1);
               }}
            >
               полдтапи
            </Button>
            <Button apperance="ghost" arrow="down">
               полдтапи
            </Button>
            <Tag size="s" color="ghost">
               отправить
            </Tag>
            <Tag size="m" color="primary">
               отправить
            </Tag>
            <Tag size="m" color="red" href="https://hh.ru">
               hh.ru
            </Tag>
            <Raiting isEditable raiting={raiting} setRaiting={setRaiting}/>
         </main>
         <footer className={classes.footer}>FOOTER</footer>
      </div>
   );
};

export default Home;
