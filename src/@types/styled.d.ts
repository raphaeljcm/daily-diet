import 'styled-components/native';
import { defaultTheme } from 'src/theme';

declare module 'styled-components/native' {
  type ThemeType = typeof defaultTheme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
