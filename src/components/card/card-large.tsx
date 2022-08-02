import React from 'react';
import { CardContent } from './interfaces';
import { CardLarge as Card } from './styles';

interface Params {
  content: CardContent;
}

const CardLarge: React.FC<Params> = () => {
  return <Card></Card>;
};

export default CardLarge;
