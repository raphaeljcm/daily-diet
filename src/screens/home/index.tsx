import { Image } from 'react-native';
import { Plus } from 'phosphor-react-native';
import { StatisticsCard } from '@components/statistics-card';
import { Button } from '@components/button';
import logoImg from '@assets/logo.png';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <Image source={logoImg} />
        <S.ProfileContainer>
          <S.ProfileImg source={{ uri: 'https://github.com/raphaeljcm.png' }} />
        </S.ProfileContainer>
      </S.Header>

      <StatisticsCard
        value={90.86}
        subtitle="das refeições dentro da dieta"
        iconSide="right"
        showIcon
      />

      <S.MealsContainer>
        <S.RegularTitle>Refeições</S.RegularTitle>
        <Button title="Nova refeição" Icon={Plus} fullWidth />
      </S.MealsContainer>
    </S.Container>
  );
}
