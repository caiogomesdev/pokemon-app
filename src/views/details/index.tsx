import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import Card from '../../components/card';
import { CardContent } from '../../components/card/interfaces';
import Skills from '../../components/skills';

const Details: React.FC = () => {
  const navigation = useNavigation();
  const temp: CardContent = {
    id: 1,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    title: 'Pikachu',
    description: '1231',
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Não encontrado',
      headerShown: true,
    });
  }, []);
  return (
    <Container>
      <Card type="large-item" content={temp} />
      <Skills />
    </Container>
  );
};

export default Details;
