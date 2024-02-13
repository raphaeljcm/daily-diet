import { SafeAreaView } from 'react-native-safe-area-context';
import { css, styled } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const MainContentContainer = styled.View`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 24px;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    margin-bottom: 24px;
    text-align: center;
  `}
`;

export const StatisticsContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;
