import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin-top: 20px;
`;

export const Line = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_900};
  padding-bottom: 5px;
  margin-bottom: 20px;
`;
