import React, { useState } from 'react';
import { CardContainer, Container, Title } from './styles';
import Card from '../card';
import { CardContent } from '../card/interfaces';
import { FlatList, View } from 'react-native';

const Pokemons: React.FC = () => {
  const [items, setItems] = useState<CardContent[]>([
    {
      id: 1,
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      id: 2,
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      id: 3,
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      id: 4,
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
  ]);

  return (
    <Container>
      <Title>Pokemons</Title>
      <CardContainer>
        {items.map((item) => (
          <Card type="item" content={item} key={item.id} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Pokemons;
