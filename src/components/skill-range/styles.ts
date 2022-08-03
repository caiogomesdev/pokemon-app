import styled from 'styled-components/native';

interface ForegroundParams {
  range: number;
}

export const SkillContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const RangeBackground = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  height: 11px;
  width: 50%;
`;

export const RangeForeground = styled.View<ForegroundParams>`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_700};
  width: ${(props) => (props.range > 100 ? 100 : props.range)}%;
  height: 100%;
`;
