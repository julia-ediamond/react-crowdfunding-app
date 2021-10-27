import { createTheme, ThemeProvider } from '@material-ui/core/styles'
//import { colors } from '@material-ui/core';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#f44336',
      light: '#f6685e',
      dark: '#aa2e25'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
})

export default theme

// export default function Palette() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>Primary</Button>
//       <Button color="secondary">Secondary</Button>
//     </ThemeProvider>
//   );
// }