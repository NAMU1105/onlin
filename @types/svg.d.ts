declare module "*.svg" {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>> | any;
  export = value;
}
