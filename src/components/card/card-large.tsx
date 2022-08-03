import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CardLarge as Card,
  Description,
  Title,
  Image,
  Column,
  ButtonContainer,
} from './styles';
import Button from '../button';
import { AppPokemon } from '../../services/models';

interface Params {
  content: AppPokemon;
}

const CardLarge: React.FC<Params> = ({ content }) => {
  const navigation = useNavigation();

  function Details() {
    navigation.navigate('Details', { pokemonId: content.id });
  }
  return (
    <Card>
      <Image source={{ uri: content.image }} />
      <Column>
        <Title>{content.name}</Title>
        <Description>{content.description}</Description>
        <ButtonContainer>
          <Button type="favorite" />
          <Button marginLeft={12} type="default" onPress={() => Details()}>
            Ver mais
          </Button>
        </ButtonContainer>
      </Column>
    </Card>
  );
};

export default CardLarge;
