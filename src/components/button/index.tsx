import React from 'react';
import { GestureResponderEvent } from 'react-native';
import ButtonDefault from './button-default';
import ButtonFavorite from './button-favorite';
import ButtonInfo from './button-info';

interface Params {
  type: 'default' | 'favorite' | 'info';
  isAtived?: boolean;
  marginLeft?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<Params> = ({
  type,
  children,
  isAtived,
  onPress,
  marginLeft = 0,
}) => {
  function getButton(): JSX.Element {
    const buttonTypes = {
      default: (
        <ButtonDefault marginLeft={marginLeft} onPress={onPress}>
          {children}
        </ButtonDefault>
      ),
      favorite: <ButtonFavorite isAtived={isAtived} onPress={onPress} />,
      info: <ButtonInfo onPress={onPress} />,
    };
    return buttonTypes[type];
  }
  return getButton();
};

export default Button;
