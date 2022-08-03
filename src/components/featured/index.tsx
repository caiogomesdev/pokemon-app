import React, { useState } from 'react';
import { Container, Title } from './styles';
import Card from '../card';
import { CardContent } from '../card/interfaces';

const Featured: React.FC = () => {
  const [content, setContent] = useState<CardContent>({
    id: 1,
    title: 'Pikachu',
    description:
      'Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun...',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  });

  return (
    <Container>
      <Title>Destaque</Title>
      <Card type="large" content={content} />
    </Container>
  );
};

export default Featured;
