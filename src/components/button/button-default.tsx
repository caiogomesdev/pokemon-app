import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { ButtonDefault as Button, Text } from './styles';

interface Params {
  onPress?: (event: GestureResponderEvent) => void;
  marginLeft: number;
}

const ButtonDefault: React.FC<Params> = ({ children, onPress, marginLeft }) => {
  return (
    <Button style={{ marginLeft }} onPress={onPress}>
      <Text>{children}</Text>
    </Button>
  );
};

export default ButtonDefault;
