import { StatisticsCard } from '@components/statistics-card';
import { formatToPercentage } from '@utils/currency';
import * as S from './styles';
import { useTheme } from 'styled-components';

export function Statistics() {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <StatisticsCard
        value={90.96}
        subtitle="das refeições dentro da dieta"
        iconSide="left"
        variant="hightlight"
        formatter={formatToPercentage}
        showIcon
        asBackButton
      />

      <S.MainContentContainer>
        <S.Title>Estatísticas gerais</S.Title>

        <StatisticsCard
          value={4}
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticsCard value={109} subtitle="refeições registradas" />

        <S.StatisticsContainer>
          <StatisticsCard
            value={32}
            subtitle={`refeições dentro da \n dieta`}
            style={{
              backgroundColor: COLORS.GREEN_LIGHT,
              flex: 1,
            }}
          />
          <StatisticsCard
            value={77}
            subtitle={`refeições fora da \n dieta`}
            style={{ backgroundColor: COLORS.RED_LIGHT, flex: 1 }}
          />
        </S.StatisticsContainer>
      </S.MainContentContainer>
    </S.Container>
  );
}
