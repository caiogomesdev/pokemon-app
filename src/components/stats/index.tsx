import React from 'react';
import SkillRange from '../skill-range';
import { Container, Title, Line } from './styles';
import { Stats as StatsModel } from '../../services/models';

interface Params {
  stats: StatsModel[];
}
const Stats: React.FC<Params> = ({ stats }) => {
  return (
    <Container>
      <Line>
        <Title>Stats</Title>
      </Line>
      {stats.map((item) => (
        <SkillRange key={item.skill} skill={item.skill} value={item.range} />
      ))}
    </Container>
  );
};

export default Stats;
