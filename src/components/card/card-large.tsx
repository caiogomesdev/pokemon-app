import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CardContent } from './interfaces';
import {
  CardLarge as Card,
  Description,
  Title,
  Image,
  Column,
  ButtonContainer,
} from './styles';
import Button from '../button';

interface Params {
  content: CardContent;
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
        <Title>{content.title}</Title>
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
