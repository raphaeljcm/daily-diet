import { DefaultThemeColors } from 'src/theme';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

interface DefaultHeaderProps {
  title: string;
  bgColor?: DefaultThemeColors;
}

export function DefaultHeader({ title, bgColor }: DefaultHeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <S.Container bgColor={bgColor}>
      <S.BackButton activeOpacity={0.7} onPress={handleGoBack}>
        <S.Icon />
      </S.BackButton>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
