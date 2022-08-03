import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CardButtons, CardItem as Card, Image, TextCardItem } from './styles';
import Button from '../button';
import { AppPokemon } from '../../services/models';
import { AppContext } from '../../hooks/app-provider';

interface Params {
  content: AppPokemon;
}

const CardItem: React.FC<Params> = ({ content }) => {
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

  function details() {
    navigation.navigate('Details', {
      pokemonId: content.id,
    });
  }
  return (
    <Card>
      <Image source={{ uri: content.image }} />
      <TextCardItem>{content.name}</TextCardItem>
      <CardButtons>
        <Button
          type="favorite"
          onPress={() => addFavorite()}
          isAtived={favorite}
        />
        <Button type="info" onPress={() => details()} />
      </CardButtons>
    </Card>
  );
};

export default CardItem;
