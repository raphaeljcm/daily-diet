import { css, styled } from 'styled-components/native';

interface SelectButtonStyleProps {
  variant: 'primary' | 'secondary';
  fullWidth?: boolean;
  isSelected?: boolean;
}

export const SelectButton = styled.TouchableOpacity<SelectButtonStyleProps>`
  min-height: 50px;
  max-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  ${({ theme, fullWidth }) => css`
    width: ${fullWidth ? '100%' : '170px'};
    background-color: ${theme.COLORS.GRAY_600};
  `}
  ${({ theme, variant, isSelected }) =>
    isSelected &&
    css`
      border: 1px solid
        ${variant === 'primary'
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK};
      background-color: ${variant === 'primary'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

interface CircleStyleProps {
  variant: 'primary' | 'secondary';
}

export const Circle = styled.View<CircleStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  top: 2px;
  ${({ theme, variant }) => css`
    background-color: ${variant === 'primary'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;
