import React from 'react';
import SkillRange from '../skill-range';
import { Container, Title, Line } from './styles';

const Skills: React.FC = () => {
  return (
    <Container>
      <Line>
        <Title>Habilidades</Title>
      </Line>
      <SkillRange skill="qwe" value={60} />
      <SkillRange skill="qwe" value={70} />
      <SkillRange skill="qwe" value={100} />
    </Container>
  );
};

export default Skills;
