import { css, styled } from 'styled-components/native';
import { defaultTheme } from 'src/theme';

interface ContainerStyleProps {
  bgColor: (typeof defaultTheme.COLORS)[keyof typeof defaultTheme.COLORS];
}

export const Container = styled.View<ContainerStyleProps>`
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
