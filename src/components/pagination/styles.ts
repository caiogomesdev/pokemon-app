import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const None = styled.View``;

export const TextCount = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const Text = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;
