import styled from 'styled-components/native';

export const ButtonDefault = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_700};
  padding: 3px 10px;
  width: 54px;
  border-radius: 6px;
`;

export const Text = styled.Text`
  font-size: 8px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_800};
`;

export const ButtonFavorite = styled.TouchableOpacity``;

export const Image = styled.Image``;
