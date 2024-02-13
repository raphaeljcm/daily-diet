import { useTheme } from 'styled-components/native';
import { ArrowDownLeft, ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import { formatToPercentage } from '@utils/currency';
import * as S from './styles';

interface StatisticsCardProps {
  value: number;
  subtitle: string;
  showIcon?: boolean;
  asBackButton?: boolean;
  iconSide?: 'left' | 'right';
}

const getIcon = (isPositive: boolean, asBackButton: boolean) => {
  if (asBackButton) return ArrowLeft;
  return isPositive ? ArrowUpRight : ArrowDownLeft;
};

export function StatisticsCard({
  value,
  subtitle,
  showIcon = false,
  asBackButton = false,
  iconSide = 'left',
}: StatisticsCardProps) {
  const { COLORS } = useTheme();
  const isPositive = value > 0;
  const Icon = getIcon(isPositive, asBackButton);

  return (
    <S.Container bgColor={isPositive ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}>
      {showIcon && (
        <Icon
          size={24}
          color={isPositive ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          style={{ position: 'absolute', top: 16, [iconSide]: 16 }}
        />
      )}
      <S.Value>{formatToPercentage(value)}</S.Value>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
