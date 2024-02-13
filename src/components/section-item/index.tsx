import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface SectionItemProps extends TouchableOpacityProps {
  time: string;
  name: string;
  onDiet: boolean;
}

export function SectionItem({ time, name, onDiet, ...rest }: SectionItemProps) {
  return (
    <S.Container activeOpacity={0.6} {...rest}>
      <S.ContentContainer>
        <S.Time>{time}</S.Time>
        <S.Divider />
        <S.Name>{name}</S.Name>
      </S.ContentContainer>
      <S.OnDietCircle onDiet={onDiet} />
    </S.Container>
  );
}
