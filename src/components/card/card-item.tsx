import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CardContent } from './interfaces';
import { CardButtons, CardItem as Card, Image, TextCardItem } from './styles';
import Button from '../button';

interface Params {
  content: CardContent;
}

const CardItem: React.FC<Params> = ({ content }) => {
  const navigation = useNavigation();

  function addFavorite() {
    console.log('Favorite');
  }
  function details() {
    navigation.navigate('Details', {
      pokemonId: 1,
    });
  }
  return (
    <Card>
      <Image source={{ uri: content.image }} />
      <TextCardItem>{content.title}</TextCardItem>
      <CardButtons>
        <Button type="favorite" onPress={() => addFavorite} />
        <Button type="info" onPress={() => details()} />
      </CardButtons>
    </Card>
  );
};

export default CardItem;
