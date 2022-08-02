import styled from 'styled-components/native';

export const CardLarge = styled.View`
  margin-top: 10px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  width: 100%;
  height: 132px;
  padding: 20px 39px;
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

export const ButtonContainer = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: flex-end;
  width: 53%;
  align-self: flex-end;
  flex-direction: row;
`;

export const CardItem = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  max-width: 157px;
  padding: 17px 40px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const TextCardItem = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  margin-top: 9px;
  margin-right: 20px;
  text-align: center;
  width: 100%;
`;

export const CardButtons = styled.View`
  padding: 2px 12px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_600};
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const VerticalLine = styled.View`
  padding-right: 16px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.LIGHT_800};
  margin-right: 20px;
`;
