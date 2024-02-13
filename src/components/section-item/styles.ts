import { TouchableOpacity } from 'react-native';
import { css, styled } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  padding: 14px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    width: 1px;
    height: 14px;
    background-color: ${theme.COLORS.GRAY_400};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

interface OnDietCircleProps {
  onDiet: boolean;
}

export const OnDietCircle = styled.View<OnDietCircleProps>`
  ${({ theme, onDiet }) => css`
    width: 14px;
    height: 14px;
    border-radius: 9999px;
    background-color: ${onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  `}
`;
