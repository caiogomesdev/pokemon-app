import React from 'react';
import { GestureResponderEvent } from 'react-native';

import HeartFill from '../../assets/Favorite-fill.png';
import HeartStroke from '../../assets/Favorite-stroke.png';
import { ButtonFavorite as Button, Image } from './styles';

interface Params {
  isAtived?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const ButtonFavorite: React.FC<Params> = ({ isAtived, onPress }) => {
  return (
    <Button onPress={() => onPress}>
      <Image source={isAtived ? HeartFill : HeartStroke} />
    </Button>
  );
};

export default ButtonFavorite;
