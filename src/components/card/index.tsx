import React from 'react';

import CardLarge from './card-large';
import CardLargeItem from './card-large-item';
import CardItem from './card-item';
import { AppPokemon } from '../../services/models';

interface Params {
  type: 'large' | 'large-item' | 'item';
  content: AppPokemon;
  showButtonDetails?: boolean;
  removeCard?: boolean;
}

const Card: React.FC<Params> = ({
  type,
  content,
  showButtonDetails = false,
  removeCard = false,
}) => {
  function getCard() {
    const cardType = {
      large: <CardLarge content={content} removeCard={removeCard} />,
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
