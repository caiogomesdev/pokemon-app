import React from 'react';
import { Container, Title, SafeArea } from './styles';
import Card from '../../components/card';
import { CardContent } from '../../components/card/interfaces';

interface Params {
  pokemonIndex: number;
}

const Favorites: React.FC<Params> = () => {
  const favorites: CardContent = {
    id: 1,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    title: 'adasdds',
    description: 'qweqweqw eqwqeqweqwewqqweqeqdas as asdsaad asd adsadczxxzcsc',
  };
  return (
    <SafeArea>
      <Container>
        <Title>Favoritos</Title>
        <Card type="large" showButtonDetails={true} content={favorites} />
      </Container>
    </SafeArea>
  );
};

export default Favorites;
