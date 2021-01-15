import { Grid } from "@material-ui/core";
import React from "react";
import { AppContext } from "../App";
import Todo from "../comps/Todo";

function Home() {
  const context = React.useContext(AppContext);

  return (
    <Grid container alignItems="center" justify="space-evenly">
      
      {context.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </Grid>
  );
}

export default React.memo(Home);
