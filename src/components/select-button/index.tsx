import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface SelectButtonProps extends TouchableOpacityProps {
  variant: 'primary' | 'secondary';
  label: string;
  isSelected?: boolean;
  fullWidth?: boolean;
}

export function SelectButton({
  label,
  variant,
  fullWidth = false,
  isSelected = false,
  ...rest
}: SelectButtonProps) {
  return (
    <S.SelectButton
      activeOpacity={0.6}
      variant={variant}
      isSelected={isSelected}
      fullWidth={fullWidth}
      {...rest}
    >
      <S.Circle variant={variant} />
      <S.Label>{label}</S.Label>
    </S.SelectButton>
  );
}
