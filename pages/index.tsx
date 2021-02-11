import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import client from '../services/apollo-client';
import { gql, useLazyQuery } from '@apollo/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PokemonList from '../components/PokemonList';
import PokemonCard from '../components/PokemonCard';

interface PokemonSimplified {
  num: string;
  name: string;
}
interface PokemonDetails {
  id: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  weaknesses: string[];
  /* prev_evolution?: PokemonSimplified[];
  next_evolution?: PokemonSimplified[]; */
}

const GET_POKEMON = gql`
  query detailPokemon($uid: String!) {
    getPokemon(uid: $uid) {
      id
      name
      img
      type
      height
      weight
      weaknesses
    }
  }
`;

const Home = ({ pokemons }) => {
  const [uid, setUid] = useState<string>('');
  const [pokemon, setPokemon] = useState(null);
  const [getPokemon] = useLazyQuery(GET_POKEMON, {
    onCompleted: data => setPokemon(data.getPokemon)
  });

  useEffect(() => {
    if (uid !== '') {
      setPokemon(null);
      getPokemon({ variables: { uid: uid } });
    }
  }, [uid]);

  return (
    <>
      <Head>
        <title>Fullstack Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <PokemonList pokemons={pokemons} setUid={setUid} />
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allPokemons {
        getPokemons {
          num
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
