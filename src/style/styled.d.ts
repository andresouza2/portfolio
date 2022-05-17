import 'styled-components';
import dark from '../style/themes/dark'

type theme = typeof dark

declare module 'styled-components' {
  /* export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;
      button: string;
      borderBG: string;
      amarelo?: string;
      branco: string;
      preto: string;
    }, */

  export interface DefaultTheme extends theme { }
}
