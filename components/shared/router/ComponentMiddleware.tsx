import React from "react";

interface AuthMiddleWareProps {
  component: React.FC<any>;
  content: any;
}

const Authmiddleware: React.FC<AuthMiddleWareProps> = ({
  component: Component,
  ...rest
  // layout: Layout,
}) => {
  return (
    // <Layout>
    <Component {...rest} />
    // </Layout>
  );
};
export default Authmiddleware;
