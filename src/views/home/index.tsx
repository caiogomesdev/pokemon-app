import React from 'react';
import { Container } from './styles';

interface Params {
  onLayout: () => void;
}

const Home: React.FC<Params> = ({ onLayout }) => {
  return <Container onLayout={onLayout}></Container>;
};

export default Home;
