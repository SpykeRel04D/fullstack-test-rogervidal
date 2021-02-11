import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Pokemon {
    id: Int
    num: String
    name: String
    img: String
    type: [PokemonTypes]
    height: String
    weight: String
    candy: String
    candy_count: Int
    egg: String
    spawn_chance: Float
    avg_spawns: Float
    spawn_time: String
    multipliers: [Float]
    weaknesses: [PokemonTypes]
    prev_evolution: [PokemonEvolution]
    next_evolution: [PokemonEvolution]
  }

  type Query {
    getPokemons: [Pokemon]
    getPokemon(uid: String!): Pokemon!
  }

  type PokemonEvolution {
    num: String
    name: String
  }

  enum PokemonTypes {
    Bug
    Dark
    Dragon
    Electric
    Fairy
    Fighting
    Fire
    Flying
    Ghost
    Grass
    Ground
    Ice
    Normal
    Poison
    Psychic
    Rock
    Steel
    Water
  }
`;

export { typeDefs };
