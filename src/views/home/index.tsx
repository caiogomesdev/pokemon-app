import React from 'react';
import { Container, SafeArea } from './styles';

import Featured from '../../components/featured';
import Pokemons from '../../components/pokemons';

interface Params {
  onLayout: () => void;
}

const Home: React.FC<Params> = ({ onLayout }) => {
  return (
    <SafeArea>
      <Container onLayout={onLayout}>
        <Featured />
        <Pokemons />
      </Container>
    </SafeArea>
  );
};

export default Home;
