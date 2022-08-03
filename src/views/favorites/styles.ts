import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_800};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const TextMessage = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  text-align: center;
  padding-bottom: 70px;
`;
