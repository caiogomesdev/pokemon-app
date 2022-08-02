import React from 'react';
import { CardContent } from './interfaces';

import CardLarge from './card-large';
import CardLargeItem from './card-large-item';
import CardItem from './card-item';

interface Params {
  type: 'large' | 'large-item' | 'item';
  content: CardContent;
  showButtonDetails?: boolean;
}

const Card: React.FC<Params> = ({
  type,
  content,
  showButtonDetails = false,
}) => {
  function getCard() {
    const cardType = {
      large: <CardLarge content={content} />,
      'large-item': (
        <CardLargeItem
          showButtonDetails={showButtonDetails}
          content={content}
        />
      ),
      item: <CardItem content={content} />,
    };
    return cardType[type];
  }
  return getCard();
};

export default Card;
