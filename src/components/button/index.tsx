import { TouchableOpacityProps } from 'react-native';
import { Icon } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import * as S from './style';

export type ButtonVariants = 'primary' | 'secondary';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariants;
  Icon?: Icon;
  fullWidth?: boolean;
}

export function Button({
  title,
  Icon,
  variant = 'primary',
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const { COLORS } = useTheme();
  const iconColor = variant === 'primary' ? COLORS.WHITE : COLORS.GRAY_100;

  return (
    <S.Button
      variant={variant}
      fullWidth={fullWidth}
      activeOpacity={0.7}
      {...rest}
    >
      {Icon && <Icon size={18} color={iconColor} />}
      <S.Title variant={variant}>{title}</S.Title>
    </S.Button>
  );
}
