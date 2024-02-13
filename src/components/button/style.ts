import { TouchableOpacity } from 'react-native';
import { css, styled } from 'styled-components/native';
import { ButtonVariants } from '.';

interface ButtonStyleProps {
  variant: ButtonVariants;
  fullWidth?: boolean;
}

export const Button = styled(TouchableOpacity)<ButtonStyleProps>`
  min-height: 56px;
  max-height: 56px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, variant, fullWidth }) => css`
    width: ${fullWidth ? '100%' : '190px'};
    background-color: ${variant === 'primary'
      ? theme.COLORS.GRAY_100
      : theme.COLORS.WHITE};
  `};
`;

interface TitleProps {
  variant: ButtonVariants;
}

export const Title = styled.Text<TitleProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'primary'
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
