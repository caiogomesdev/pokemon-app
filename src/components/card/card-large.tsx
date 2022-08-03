import React, { useContext, useEffect, useState } from 'react';
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
import { AppContext } from '../../hooks/app-provider';
interface Params {
  content: AppPokemon;
  removeCard: boolean;
}

const CardLarge: React.FC<Params> = ({ content, removeCard }) => {
  const navigation = useNavigation();
  const context = useContext(AppContext);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(!!context?.favorites.hasItem(content));
    navigation.addListener('focus', () => {
      setFavorite(!!context?.favorites.hasItem(content));
    });
  }, []);

  async function addFavorite() {
    console.log(removeCard);
    await context?.favorites.handleButtonFavorite(content);
    if (removeCard) {
      return;
    }
    setFavorite(!!context?.favorites.hasItem(content));
  }

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
          <Button
            type="favorite"
            onPress={() => addFavorite()}
            isAtived={favorite}
          />
          <Button marginLeft={12} type="default" onPress={() => Details()}>
            Ver mais
          </Button>
        </ButtonContainer>
      </Column>
    </Card>
  );
};

export default CardLarge;
