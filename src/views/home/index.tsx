import React from 'react';
import { Container } from './styles';
import Featured from '../../components/featured';
interface Params {
  onLayout: () => void;
}

const Home: React.FC<Params> = ({ onLayout }) => {
  return (
    <Container onLayout={onLayout}>
      <Featured />
    </Container>
  );
};

export default Home;
