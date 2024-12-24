import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'class'
    },
    colorSchemes: {
      light: {
        palette: {
          // The best part is that you can refer to the variables wherever you like 🤩
          gradient:
            'linear-gradient(to left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark))',
          border: {
            subtle: 'var(--mui-palette-neutral-200)',
          },
          spacing: (factor) => `${0.25 * factor}rem`,
        },
      },
      dark: {
        palette: {
          gradient:
            'linear-gradient(to left, var(--mui-palette-primary-light), var(--mui-palette-primary-main))',
          border: {
            subtle: 'var(--mui-palette-neutral-600)',
          },
        },
        spacing: (factor) => `${0.25 * factor}rem`,
      },
    },
  });

export default theme;