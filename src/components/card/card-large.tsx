import React from 'react';
import { CardContent } from './interfaces';
import {
  CardLarge as Card,
  Description,
  Title,
  Image,
  Column,
  ButtonContainer,
} from './styles';
import Button from '../button';

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
        <ButtonContainer>
          <Button type="favorite" />
          <Button type="default">Ver mais</Button>
        </ButtonContainer>
      </Column>
    </Card>
  );
};

export default CardLarge;
