import api from '../../../services/api';

const resolvers = {
  Query: {
    getPokemons: async () => {
      try {
        const pokemons = await api.get('pokemons');
        return pokemons.data;
      } catch (error) {
        throw error;
      }
    },
    getPokemon: async (_, args) => {
      try {
        const pokemon = await api.get(`pokemons/${args.uid}`);
        return pokemon.data.length ? pokemon.data[0] : {};
      } catch (error) {
        throw error;
      }
    }
  }
};

export { resolvers };
