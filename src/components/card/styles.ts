import styled from 'styled-components/native';

export const CardLarge = styled.View`
  margin-top: 10px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  width: 100%;
  height: 132px;
  padding: 20px 39px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
`;

export const Description = styled.Text`
  font-size: 10px;
  margin-top: 5px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_800};
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
`;

export const Column = styled.View`
  width: 60%;
`;

export const CardItem = styled.View``;