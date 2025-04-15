// src/vite-env.d.ts
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.css";
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
