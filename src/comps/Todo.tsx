import React from "react";
import { Link } from "react-router-dom";
import { TodoInterface } from "../interfaces";
import { RoutePaths } from "../router";
import styles from "./styles.module.scss";

interface TodoProps {
  todo: TodoInterface;
}

function Todo(props: TodoProps) {
  const { todo } = props;

  return (
    <div className={styles["todo"]}>
      <Link className={styles["link"]} to={`${RoutePaths.DETAIL}/${todo.id}`}>
        <div>{todo.title}</div>
      </Link>
    </div>
  );
}

export default Todo;
