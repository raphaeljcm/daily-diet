import { SafeAreaView } from 'react-native-safe-area-context';
import { css, styled } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const MainContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContentContainer = styled.View`
  gap: 16px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const FieldContainer = styled.View`
  gap: 8px;
`;

export const DietContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;
