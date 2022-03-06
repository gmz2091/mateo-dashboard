import 'styled-components';

declare module 'styled-components' {
  export interface ThemeInterface {
    borderRadius: string;

    colors: {
      main: string;
      primary: string;
      secondary: string;
    };
  }
}
