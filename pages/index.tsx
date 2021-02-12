import Head from 'next/head';
import styled from 'styled-components';
import { device, LIGHT, HEADER_HEIGHT, FOOTER_HEIGHT } from './../ui/settings';
import Pokeball from './../ui/svg/Pokeball.svg';
import React, { useState, useEffect } from 'react';
import client from '../services/apollo-client';
import { gql, useLazyQuery } from '@apollo/client';
import Main from '../components/MainContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PokemonList from '../components/PokemonList';
import PokemonCard from '../components/PokemonCard';

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

const CardZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin-top: 20px;
  }

  @media ${device.desktop} {
    height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
    margin-top: 0;
  }
`;

const PokeContainer = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 20px;

  .pokeball {
    display: block;
    margin: 0 auto;
    fill: ${LIGHT};
    width: 36%;
    max-width: 110px;
  }

  @media ${device.tablet} {
    width: 50%;
    font-size: 1.3rem;
    margin-top: 40px;
    .pokeball {
      width: 44%;
      max-width: 225px;
    }
  }

  @media ${device.desktop} {
    align-self: flex-start;

    .pokeball {
      width: 34%;
      max-width: 150px;
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
      setEvolution(null);
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
      <div className="app">
        <Header />
        <Main>
          <PokemonList pokemons={pokemons} setUid={setUid} />
          <CardZone>
            {!pokemon && (
              <PokeContainer>
                <Pokeball className="pokeball" />
                Select a Pokemon
              </PokeContainer>
            )}
            {pokemon && (
              <PokemonCard
                pokemon={pokemon}
                setEvolution={setUidEvolition}
                loadedEvolution={evolution}
              />
            )}
            {!evolution && (
              <PokeContainer>
                <Pokeball className="pokeball" />
                Select an Evolution
              </PokeContainer>
            )}
            {evolution && (
              <PokemonCard pokemon={evolution} setEvolution={setUidEvolition} evolution={true} />
            )}
          </CardZone>
        </Main>
        <Footer />
      </div>
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
