import React, { useContext, useEffect, useState } from 'react';
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
import { AppContext } from '../../hooks/app-provider';

interface Params {
  content: AppPokemon;
  showButtonDetails: boolean;
}

const CardLargeItem: React.FC<Params> = ({ content, showButtonDetails }) => {
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
    await context?.favorites.handleButtonFavorite(content);
    setFavorite(!!context?.favorites.hasItem(content));
  }

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
          <Button
            type="favorite"
            onPress={() => addFavorite()}
            isAtived={favorite}
          />
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
