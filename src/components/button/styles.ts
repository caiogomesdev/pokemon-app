import styled from 'styled-components/native';

export const ButtonDefault = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_700};
`;

export const Text = styled.Text`
  font-size: 8px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_800};
`;
