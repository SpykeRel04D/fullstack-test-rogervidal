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
      num
      name
      img
      type
      height
      weight
      weaknesses
      prev_evolution {
        num
        name
      }
      next_evolution {
        num
        name
      }
    }
  }
`;

const Home = ({ pokemons }) => {
  const [uid, setUid] = useState<string>('');
  const [pokemon, setPokemon] = useState(null);
  const [getPokemon] = useLazyQuery(GET_POKEMON, {
    onCompleted: data => setPokemon(data.getPokemon)
  });
  const [uidEvolution, setUidEvolition] = useState<string>('');
  const [evolution, setEvolution] = useState(null);
  const [getEvolution] = useLazyQuery(GET_POKEMON, {
    onCompleted: data => setEvolution(data.getPokemon)
  });

  useEffect(() => {
    if (uid !== '') {
      setPokemon(null);
      getPokemon({ variables: { uid: uid } });
    }
  }, [uid]);

  useEffect(() => {
    if (uidEvolution !== '') {
      setEvolution(null);
      getEvolution({ variables: { uid: uidEvolution } });
    }
  }, [uidEvolution]);

  return (
    <>
      <Head>
        <title>Fullstack Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <PokemonList pokemons={pokemons} setUid={setUid} />
        {pokemon && (
          <PokemonCard
            pokemon={pokemon}
            setEvolution={setUidEvolition}
            loadedEvolution={evolution}
          />
        )}
        {evolution && (
          <PokemonCard pokemon={evolution} setEvolution={setUidEvolition} evolution={true} />
        )}
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
