import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { AppContext } from "../App";
import { RoutePaths } from "../router";
import styles from "./styles.module.scss";

function Detail() {
  const { params } = useRouteMatch();
  const { id } = params as { id: string };

  const context = React.useContext(AppContext);
  const { todos, setTodos } = context;

  const selectedTodo = React.useMemo(
    () => todos.find((todo) => todo.id === id),
    [id, todos]
  );


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedTodo) {
      setTodos({ ...selectedTodo, isDone: event.target.checked });
    }
  };

  return (
    <div>
      <div className={styles["title"]}>Detail page</div>

      <Link className={styles["link"]} to={`/${RoutePaths.HOME}`}>
        <div className={styles["sub-title"]}>Home</div>
      </Link>

      {selectedTodo ? (
        <div className={styles["content"]}>
          <Checkbox checked={selectedTodo.isDone} onChange={handleChange} color="primary" />
          {selectedTodo.title}
        </div>
      ) : (
        <div>No results</div>
      )}
    </div>
  );
}

export default Detail;
