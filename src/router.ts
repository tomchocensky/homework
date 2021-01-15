import { lazy } from "react";
import { RouteProps } from "react-router-dom";

interface RouteInterface {
  path: string;
  props: RouteProps;
}

export enum RoutePaths {
  HOME = "home",
  DETAIL = "detail",
}

export const routes: RouteInterface[] = [
  {
    path: `/${RoutePaths.HOME}`,
    props: {
      component: lazy(() => import("./pages/Home")),
      exact: true,
    },
  },
  {
    path: `/${RoutePaths.DETAIL}/:id`,
    props: {
      component: lazy(() => import("./pages/Detail")),
      exact: true,
    },
  },
];