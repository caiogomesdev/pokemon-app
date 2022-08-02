import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { ButtonDefault as Button, Text } from './styles';

interface Params {
  onPress?: (event: GestureResponderEvent) => void;
}

const ButtonDefault: React.FC<Params> = ({ children, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Text>{children}</Text>
    </Button>
  );
};

export default ButtonDefault;
