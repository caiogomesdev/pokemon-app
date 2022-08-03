import React from 'react';
import { Container, Title, SafeArea } from './styles';
import Card from '../../components/card';
import { CardContent } from '../../components/card/interfaces';

interface Params {
  pokemonIndex: number;
}

const Favorites: React.FC<Params> = () => {
  return (
    <SafeArea>
      <Container>
        <Title>Favoritos</Title>
        {/* <Card type="large" showButtonDetails={true} content={favorites} /> */}
      </Container>
    </SafeArea>
  );
};

export default Favorites;
