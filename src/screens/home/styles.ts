import { SafeAreaView } from 'react-native-safe-area-context';
import { css, styled } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ProfileContainer = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
`;

export const MealsContainer = styled.View`
  margin-top: 36px;
  gap: 8px;
`;

export const RegularTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
