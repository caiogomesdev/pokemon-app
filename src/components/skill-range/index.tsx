import React from 'react';
import {
  SkillContainer,
  Text,
  RangeBackground,
  RangeForeground,
} from './styles';

export interface Params {
  skill: string;
  value: number;
}

const SkillRange: React.FC<Params> = ({ skill, value }) => {
  return (
    <SkillContainer>
      <Text>{skill}: </Text>
      <RangeBackground>
        <RangeForeground range={value} />
      </RangeBackground>
    </SkillContainer>
  );
};

export default SkillRange;
