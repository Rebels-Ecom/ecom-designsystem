import type { MantineThemeOverride } from '@mantine/core';


declare module '@mantine/core' {
  export interface MantineThemeOther {
    myCustomProperty: string;
    fontWeights: any;
  }
}


// export your theme object
export const theme: MantineThemeOverride = {
  defaultRadius: 0,
  fontFamily: 'spendrups_primary',
  other: {
    myCustomProperty: 'spendrups_secondary',
    fontWeights: {
      bold: 700,
      extraBold: 900,
    },
  }
}