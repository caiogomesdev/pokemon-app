import React from 'react';
import { CardContent } from './interfaces';
import { CardLarge as Card, Description, Title, Image, Column } from './styles';

interface Params {
  content: CardContent;
}

const CardLarge: React.FC<Params> = ({ content }) => {
  return (
    <Card>
      <Image source={{ uri: content.image }} />
      <Column>
        <Title>{content.title}</Title>
        <Description>{content.description}</Description>
      </Column>
    </Card>
  );
};

export default CardLarge;
