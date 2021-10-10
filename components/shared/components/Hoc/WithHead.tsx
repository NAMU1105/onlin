import Head from 'next/head';

const withHead = (Component, title, description) => {
  const Comp = (props) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta property='og: title' content={title} />
          <meta property='og: url' content='url' />
          <meta property='og: description' content={description} />
          <meta property='og: image' content='넣고싶은 이미지 경로' />
        </Head>

        <Component {...props} />
      </>
    );
  };

  return Comp;
};

export default withHead;
