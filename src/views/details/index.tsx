import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import { AppContext } from '../../hooks/app-provider';
import Card from '../../components/card';
import Stats from '../../components/stats';
import { AppPokemon } from '../../services/models';
import Loading from '../../components/loading';

interface Params {
  route: {
    params: {
      pokemonId: number;
    };
  };
}

const Details: React.FC<Params> = ({ route }) => {
  const [content, setContent] = useState<AppPokemon | null>(null);
  const context = useContext(AppContext);
  const navigation = useNavigation();
  const { pokemonId } = route.params;

  useEffect(() => {
    init();
  });

  function init() {
    const validations = [checkPokemonList, checkFeatured, checkFavorites];

    for (const contentValid of validations) {
      const value = contentValid();
      if (value) {
        sucessContent(value);
        break;
      }
    }
    if (!content) {
      failContent();
    }
  }

  function sucessContent(contentValid: AppPokemon) {
    setContent(contentValid);
    navigation.setOptions({
      title: contentValid.name,
      headerShown: true,
    });
  }

  function failContent() {
    navigation.setOptions({
      title: 'Não encontrado',
      headerShown: true,
    });
  }

  function checkPokemonList() {
    return context?.pokemons.find((item) => item.id === pokemonId);
  }

  function checkFeatured() {
    if (context?.featured?.id === pokemonId) {
      return context?.featured;
    }
    return null;
  }

  function checkFavorites() {
    const value = context?.favorites.getAll.find(
      (item) => item.id === pokemonId
    );
    if (value) {
      return value;
    }
    return null;
  }

  return content ? (
    <Container>
      <Card type="large-item" content={content} />
      <Stats stats={content.stats} />
    </Container>
  ) : (
    <Loading />
  );
};

export default Details;
