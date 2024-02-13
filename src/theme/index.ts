export const defaultTheme = {
  COLORS: {
    RED_DARK: '#BF3B44',
    RED_MID: '#F3BABD',
    RED_LIGHT: '#F4E6E7',

    GREEN_DARK: '#639339',
    GREEN_MID: '#CBE4B4',
    GREEN_LIGHT: '#E5F0DB',

    GRAY_100: '#1B1D1E',
    GRAY_200: '#333638',
    GRAY_300: '#5C6265',
    GRAY_400: '#B9BBBC',
    GRAY_500: '#DDDEDF',
    GRAY_600: '#EFF0F0',
    GRAY_700: '#FAFAFA',

    WHITE: '#FFFFFF',
  },
  FONT_FAMILY: {
    REGULAR: 'Nunito_400Regular',
    BOLD: 'Nunito_700Bold',
  },
  FONT_SIZE: {
    XS: 12,
    SM: 14,
    BASE: 16,
    MD: 18,
    LG: 24,
    XL: 32,
  },
} as const;

export type DefaultThemeColors =
  (typeof defaultTheme.COLORS)[keyof typeof defaultTheme.COLORS];
