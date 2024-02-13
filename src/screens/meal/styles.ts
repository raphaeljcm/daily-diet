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
  flex: 1;
  gap: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BASE}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ParagraphContainer = styled.View`
  gap: 8px;
`;

export const DietContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 154px;
  padding: 8px 16px;
  ${({ theme }) => css`
    border-radius: 9999px;
    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

interface DietCircleProps {
  onDiet: boolean;
}

export const DietCircle = styled.View<DietCircleProps>`
  ${({ theme, onDiet }) => css`
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background-color: ${onDiet
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const ActionsContainer = styled.View`
  gap: 8px;
`;
