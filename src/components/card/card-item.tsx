import React from 'react';
import { CardContent } from './interfaces';
import { CardButtons, CardItem as Card, Image, TextCardItem } from './styles';
import Button from '../button';

interface Params {
  content: CardContent;
}

const CardItem: React.FC<Params> = ({ content }) => {
  return (
    <Card>
      <Image source={{ uri: content.image }} />
      <TextCardItem>{content.title}</TextCardItem>
      <CardButtons>
        <Button type="favorite" />
        <Button type="favorite" />
      </CardButtons>
    </Card>
  );
};

export default CardItem;
