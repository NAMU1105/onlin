import React from 'react';

interface ComponetMiddleWareProps {
  component: React.FC<any>;
  content: any;
  themeId: string;
}

const Componentmiddleware: React.FC<ComponetMiddleWareProps> = ({
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
export default Componentmiddleware;
