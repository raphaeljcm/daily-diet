import { TouchableOpacity, ViewProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ArrowDownLeft, ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

interface StatisticsCardProps extends ViewProps {
  value: number;
  subtitle: string;
  variant?: 'hightlight' | 'default';
  showIcon?: boolean;
  asBackButton?: boolean;
  iconSide?: 'left' | 'right';
  formatter?: (value: number) => string;
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
  variant = 'default',
  formatter,
  ...rest
}: StatisticsCardProps) {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const isPositive = value > 0;
  const Icon = getIcon(isPositive, asBackButton);

  const iconStyle = {
    position: 'absolute',
    top: 16,
    [iconSide]: 16,
  } as const;

  const handleGoToHomePage = () => navigation.navigate('home');

  const getBgColor = () => {
    if (variant === 'hightlight')
      return isPositive ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT;
    return COLORS.GRAY_600;
  };

  return (
    <S.Container bgColor={getBgColor()} {...rest}>
      {showIcon && asBackButton ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleGoToHomePage}
          style={{ ...iconStyle }}
        >
          <Icon
            size={24}
            color={isPositive ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          />
        </TouchableOpacity>
      ) : showIcon ? (
        <Icon
          size={24}
          color={isPositive ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          style={{ ...iconStyle }}
        />
      ) : null}
      <S.Value>{formatter ? formatter(value) : value}</S.Value>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
