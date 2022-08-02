import React, { useState } from 'react';
import { Container, Title } from './styles';
import Card from '../card';
import { CardContent } from '../card/interfaces';
import { FlatList, View } from 'react-native';

const Pokemons: React.FC = () => {
  const [items, setItems] = useState<CardContent[]>([
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      title: 'Pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
  ]);

  return (
    <Container>
      <Title>Pokemons</Title>
      <FlatList
        style={{ flexDirection: 'row' }}
        numColumns={2}
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
        }}
        data={items}
        renderItem={({ item }) => <Card type="item" content={item} />}
      />
    </Container>
  );
};

export default Pokemons;
