import React, { useContext } from 'react';
import { Container, Title, SafeArea, TextMessage } from './styles';
import { AppContext } from '../../hooks/app-provider';
import Card from '../../components/card';

interface Params {
  pokemonIndex: number;
}

const Favorites: React.FC<Params> = () => {
  const context = useContext(AppContext);
  return (
    <SafeArea>
      <Container>
        <Title>Favoritos</Title>
        {context?.favorites.getAll.map((item) => (
          <Card
            type="large"
            showButtonDetails={true}
            removeCard={true}
            key={item.id}
            content={item}
          />
        ))}
        <TextMessage>
          Você tem {context?.favorites.getAll.length}{' '}
          {context?.favorites.getAll.length === 1
            ? 'pokemon favorito'
            : 'pokemons favoritos'}{' '}
        </TextMessage>
      </Container>
    </SafeArea>
  );
};

export default Favorites;
