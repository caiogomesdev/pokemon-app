import React from 'react';
import { GestureResponderEvent } from 'react-native';
import ButtonDefault from './button-default';
import ButtonFavorite from './button-favorite';

interface Params {
  type: 'default' | 'favorite';
  isAtived?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<Params> = ({ type, children, isAtived, onPress }) => {
  return type === 'default' ? (
    <ButtonDefault onPress={onPress}>{children}</ButtonDefault>
  ) : (
    <ButtonFavorite isAtived={isAtived} onPress={onPress} />
  );
};

export default Button;
