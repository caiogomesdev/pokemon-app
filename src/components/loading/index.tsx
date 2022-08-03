import React from 'react';
import { Image } from './styles';
import Loader from '../../assets/loader.gif';
const Loading: React.FC = () => {
  return <Image source={Loader} />;
};

export default Loading;
