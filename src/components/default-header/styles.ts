import { ArrowLeft } from 'phosphor-react-native';
import { DefaultThemeColors } from 'src/theme';
import { css, styled } from 'styled-components/native';

interface ContainerProps {
  bgColor?: DefaultThemeColors;
}

export const Container = styled.View<ContainerProps>`
  padding: 20px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
