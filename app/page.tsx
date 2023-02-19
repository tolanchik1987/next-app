"use client";

import Button from "@/components/button/Button";
import Htag from "@/components/htag/Htag";
import P from "@/components/p/P";
import Raiting from "@/components/raiting/Raiting";
import Tag from "@/components/tag/Tag";
import React, { useState } from "react";
// import { withLayout } from "./layout";
import classes from "./page.module.scss";

const Home: React.FC = (): JSX.Element => {
   const [counter, setCounter] = React.useState<number>(0);
   const [raiting, setRaiting] = useState<number>(3);

   React.useEffect(() => {}, []);

   return (
      <div className={classes.container}>
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
               отправить
            </Button>
            <Button apperance="ghost" arrow="down">
               отправить
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
            <Raiting isEditable raiting={raiting} setRaiting={setRaiting} />
         </main>
      </div>
   );
};

export default Home;

// export default withLayout(Home);     //!   H O C   обертка
