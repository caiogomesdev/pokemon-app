import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CardButtons, CardItem as Card, Image, TextCardItem } from './styles';
import Button from '../button';
import { AppPokemon } from '../../services/models';

interface Params {
  content: AppPokemon;
}

const CardItem: React.FC<Params> = ({ content }) => {
  const navigation = useNavigation();

  function addFavorite() {
    console.log('Favorite');
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
          onPress={() => addFavorite}
          isAtived={content.isFavorite}
        />
        <Button type="info" onPress={() => details()} />
      </CardButtons>
    </Card>
  );
};

export default CardItem;
