export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      meal: {
        id: string;
      };
      'change-meal':
        | {
            id: string;
          }
        | undefined;
    }
  }
}
