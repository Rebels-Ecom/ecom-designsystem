import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

// Custom theme is applied to all components in App
function ThemeProvider(children: React.ReactNode) {
  return (
    <MantineProvider theme={{ fontFamily: 'spendrups_primary' }} withGlobalStyles withNormalizeCSS>
        <Notifications position="top-left" zIndex={2077}/>
        {children}
    </MantineProvider>
  );
}

export { ThemeProvider }