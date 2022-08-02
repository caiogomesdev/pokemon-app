import React from 'react';
import { CardContent } from './interfaces';

import CardLarge from './card-large';
import CardItem from './card-item';

interface Params {
  type: 'large' | 'item';
  content: CardContent;
}

const Card: React.FC<Params> = ({ type, content }) => {
  return type === 'large' ? (
    <CardLarge content={content} />
  ) : (
    <CardItem content={content} />
  );
};

export default Card;
