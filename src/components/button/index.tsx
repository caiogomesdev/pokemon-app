import React from 'react';
import ButtonDefault from './button-default';

interface Params {
  value: string;
  type: 'default' | 'favorite';
}

const Button: React.FC<Params> = ({ children }) => {
  return <ButtonDefault>{children}</ButtonDefault>;
};

export default Button;
