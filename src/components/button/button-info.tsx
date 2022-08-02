import React from 'react';
import { GestureResponderEvent } from 'react-native';

import InfoFill from '../../assets/Info-fill.png';
import { ButtonFavorite as Button, Image } from './styles';

interface Params {
  onPress?: (event: GestureResponderEvent) => void;
}

const ButtonInfo: React.FC<Params> = ({ onPress }) => {
  return (
    <Button onPress={() => onPress}>
      <Image source={InfoFill} />
    </Button>
  );
};

export default ButtonInfo;
