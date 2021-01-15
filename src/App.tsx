import React, { Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { RoutePaths, routes } from "./router";
import { AppContextInterface, TodoInterface } from "./interfaces";

// rework this into regular api call, feel free to use any open api
const todos = (): Promise<TodoInterface[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: "1",
          title: "Go shopping",
          isDone: false,
        },
        {
          id: "2",
          title: "Job interview",
          isDone: false,
        },
        {
          id: "3",
          title: "Prepare homework",
          isDone: false,
        },
      ]);
    }, 100);
  });

export const AppContext = React.createContext<AppContextInterface>({
  todos: [],
  setTodos: () => {},
});

function App() {
  const [state, setState] = React.useState<TodoInterface[]>([]);

  const updateTodo = React.useCallback(async (newValue: TodoInterface) => {
    const updateTodos = state.map((val) => {
      if (val.id === newValue.id) {
        return newValue;
      } else {
        return val;
      }
    });
    // TODO api call for save updateTodos in server (use axios)
    setState(updateTodos);
  }, [state]);

  const fetchTodos = React.useCallback(async () => {
    try {
      // TODO use axios and fetch data from server
      const awaitedTodos = await todos();
      setState(awaitedTodos);
    } catch (err) {
      console.log(err)
    }
  }, []);

  React.useEffect(() => {
    fetchTodos();
    // here we need dependency list
  }, [fetchTodos]);

  return (
    <Suspense fallback={<CircularProgress />}>
      <AppContext.Provider value={{ todos: state, setTodos: updateTodo }}>
        <div>
          <Router>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} {...route.props} />
              ))}
              <Redirect exact from="*" to={`${RoutePaths.HOME}`} />
            </Switch>
          </Router>
        </div>
      </AppContext.Provider>
    </Suspense>
  );
}

export default App;
