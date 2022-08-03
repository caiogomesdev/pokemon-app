import React, { useContext } from 'react';
import { Container, Title } from './styles';
import Card from '../card';
import { AppContext } from '../../hooks/app-provider';
import Loading from '../loading';

const Featured: React.FC = () => {
  const context = useContext(AppContext);

  return context?.featured ? (
    <Container>
      <Title>Destaque</Title>
      <Card
        type="large"
        content={{
          id: context.featured.id,
          title: context.featured.name,
          image: context.featured.image,
          description: context.featured.description,
        }}
      />
    </Container>
  ) : (
    <Loading />
  );
};

export default Featured;
