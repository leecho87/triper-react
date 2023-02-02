import React from "react";

export type RouteType = {
  path: string;
  component: React.FunctionComponent<any> | null;
  guard?: React.FunctionComponent<any> | null;
  name: string;
}