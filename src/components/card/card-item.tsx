import React from 'react';
import { CardContent } from './interfaces';
import { CardItem as Card } from './styles';

interface Params {
  content: CardContent;
}

const CardItem: React.FC<Params> = () => {
  return <Card></Card>;
};

export default CardItem;
