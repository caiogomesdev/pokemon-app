import React, { useContext } from 'react';
import { AppContext } from '../../hooks/app-provider';
import { CardContainer, Container, Title } from './styles';
import Card from '../card';

const Pokemons: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <Container>
      <Title>Pokemons</Title>
      <CardContainer>
        {context?.pokemons.map((item) => (
          <Card type="item" content={item} key={item.id} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Pokemons;
