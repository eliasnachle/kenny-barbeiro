import { css } from '@emotion/react';

interface MyTheme {}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<MyTheme>;
  }
}
