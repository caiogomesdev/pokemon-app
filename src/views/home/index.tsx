import React from 'react';
import { Container, SafeArea } from './styles';

import Featured from '../../components/featured';
import Pokemons from '../../components/pokemons';

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <Featured />
        <Pokemons />
      </Container>
    </SafeArea>
  );
};

export default Home;
