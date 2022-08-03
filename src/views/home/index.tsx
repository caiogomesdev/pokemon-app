import React from 'react';
import { Container, SafeArea } from './styles';

import Featured from '../../components/featured';
import Pokemons from '../../components/pokemons';
import Pagination from '../../components/pagination';

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <Featured />
        <Pokemons />
        <Pagination />
      </Container>
    </SafeArea>
  );
};

export default Home;
