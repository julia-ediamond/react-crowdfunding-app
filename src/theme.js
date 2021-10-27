import { createTheme } from '@material-ui/core/styles'
//import { colors } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: { 
        light: "#f6685e", 
        main: "#f44336", 
        dark: "#aa2e25"

}, secondary: {
    light: '#ab003c',
    main: '#f50057',
    dark: '#f73378',
    contrastText: '#000',
}

  },
})
export default theme