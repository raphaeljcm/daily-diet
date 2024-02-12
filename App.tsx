import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { defaultTheme } from 'src/theme';
import { Loading } from '@components/loading';
import { Routes } from 'src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
