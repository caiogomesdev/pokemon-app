import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CardLarge as Card,
  Description,
  Title,
  Image,
  Column,
  ButtonContainer,
  VerticalLine,
} from './styles';
import Button from '../button';
import { AppPokemon } from '../../services/models';

interface Params {
  content: AppPokemon;
  showButtonDetails: boolean;
}

const CardLargeItem: React.FC<Params> = ({ content, showButtonDetails }) => {
  const navigation = useNavigation();

  function Details() {
    navigation.navigate('Details', { pokemonId: content.id });
  }
  return (
    <Card>
      <VerticalLine>
        <Image source={{ uri: content.image }} />
      </VerticalLine>
      <Column>
        <Title style={{ paddingLeft: 20 }}>{content.name}</Title>
        <Description style={{ paddingLeft: 20 }}>
          {content.description}
        </Description>
        <ButtonContainer>
          <Button type="favorite" />
          {showButtonDetails && (
            <Button marginLeft={12} type="default" onPress={() => Details()}>
              Ver mais
            </Button>
          )}
        </ButtonContainer>
      </Column>
    </Card>
  );
};

export default CardLargeItem;
