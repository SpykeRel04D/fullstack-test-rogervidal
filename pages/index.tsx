import Head from 'next/head';
import Logo from '../ui/svg/pokemon-logo.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>Fullstack Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo className="logo" />
    </>
  );
};

export default Home;
