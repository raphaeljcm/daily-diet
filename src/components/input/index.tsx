import { TextInputProps } from 'react-native';
import * as S from './styles';

interface InputProps extends TextInputProps {
  fullWidth?: boolean;
}

export function Input({ fullWidth = false, ...rest }: InputProps) {
  return <S.Input fullWidth={fullWidth} {...rest} />;
}
