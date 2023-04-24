import { MantineProvider } from '@mantine/core';

// Custom theme is applied to all components in App
function ThemeProvider(children: React.ReactNode) {
  return (
    <MantineProvider theme={{ fontFamily: 'spendrups_primary' }} withGlobalStyles withNormalizeCSS>
        {children}
    </MantineProvider>
  );
}

export { ThemeProvider }