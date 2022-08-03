import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import Card from '../../components/card';
import Skills from '../../components/skills';

const Details: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      {/* <Card type="large-item" content={temp} /> */}
      <Skills />
    </Container>
  );
};

export default Details;
