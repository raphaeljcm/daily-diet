import { Image } from 'react-native';
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
    </S.Container>
  );
}
