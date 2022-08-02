import React from 'react';
import { ButtonDefault as Button, Text } from './styles';

const ButtonDefault: React.FC = ({ children }) => {
  return (
    <Button>
      <Text>{children}</Text>
    </Button>
  );
};

export default ButtonDefault;
