import Head from 'next/head';
import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PokemonList from '../components/PokemonList';
import PokemonCard from '../components/PokemonCard';

const Home = ({ pokemons }) => {
  const [uid, setUid] = useState<string>('');
  return (
    <>
      <Head>
        <title>Fullstack Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <PokemonList pokemons={pokemons} setUid={setUid} />
        {uid !== '' && <PokemonCard />}
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query allPokemons {
        getPokemons {
          id
          img
        }
      }
    `
  });

  return {
    props: {
      pokemons: data.getPokemons
    }
  };
}
