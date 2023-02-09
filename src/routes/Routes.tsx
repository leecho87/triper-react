import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { AuthRoutes, TourRoutes } from "routes";
import AuthLayout from 'layouts/AuthLayout'
import TourLayout from 'layouts/TourLayout'
import { RouteType } from "types/RouteType";

const generateRoutes = (Layout: React.ElementType, routes: RouteType[]) => {
  return (
    <Route element={<Layout />}>
      {routes.map((item: RouteType, index: number) => {
        const Component: any = item.component;

        return (
          <Route
            path={item.path}
            element={<Component />}
            key={index}
          />
        )
      })}
    </Route>
  )
}

const Routes = () => {
  return (
    <ReactRoutes>
      {generateRoutes(AuthLayout, AuthRoutes)}
      {generateRoutes(TourLayout, TourRoutes)}
    </ReactRoutes>
  )
}

export default Routes;