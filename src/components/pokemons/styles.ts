import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin-top: 20px;
  margin-bottom: 10px;
`;
