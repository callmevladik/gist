import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

export const UiThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
