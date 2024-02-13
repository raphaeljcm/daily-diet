import { Image, SectionList, TouchableOpacity } from 'react-native';
import { Plus } from 'phosphor-react-native';
import { RECORDS } from 'src/consts/data';
import { useNavigation } from '@react-navigation/native';
import { StatisticsCard } from '@components/statistics-card';
import { Button } from '@components/button';
import { SectionItem } from '@components/section-item';
import logoImg from '@assets/logo.png';
import { formatToPercentage } from '@utils/currency';
import * as S from './styles';

export function Home() {
  const navigation = useNavigation();

  const handleGoToStatistics = () => navigation.navigate('statistics');

  const handleGoToMeal = (id: string) => navigation.navigate('meal', { id });

  return (
    <S.Container>
      <S.Header>
        <Image source={logoImg} />
        <S.ProfileContainer>
          <S.ProfileImg source={{ uri: 'https://github.com/raphaeljcm.png' }} />
        </S.ProfileContainer>
      </S.Header>

      <TouchableOpacity activeOpacity={0.7} onPress={handleGoToStatistics}>
        <StatisticsCard
          value={90.86}
          subtitle="das refeições dentro da dieta"
          iconSide="right"
          variant="hightlight"
          formatter={formatToPercentage}
          showIcon
        />
      </TouchableOpacity>

      <S.MealsContainer>
        <S.RegularTitle>Refeições</S.RegularTitle>
        <Button title="Nova refeição" Icon={Plus} fullWidth />
      </S.MealsContainer>

      <SectionList
        sections={RECORDS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SectionItem {...item} onPress={() => handleGoToMeal(item.id)} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <S.SectionContainer>
            <S.SectionTitle>{title}</S.SectionTitle>
          </S.SectionContainer>
        )}
        contentContainerStyle={{ paddingBottom: 24, gap: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
