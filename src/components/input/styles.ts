import { css, styled } from 'styled-components/native';

interface InputStyleProps {
  fullWidth?: boolean;
}

export const Input = styled.TextInput.attrs(({ theme }) => ({
  cursorColor: theme.COLORS.GRAY_100,
}))<InputStyleProps>`
  border-radius: 6px;
  padding: 10px 14px;
  width: '100%';
  ${({ theme, fullWidth }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    width: ${fullWidth ? '100%' : '170px'};
  `};
`;
