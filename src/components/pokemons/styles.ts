import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 150px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin-top: 20px;
  margin-bottom: 10px;
`;
