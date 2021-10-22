import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: { 
        light: "#4aedc4", 
        main: "#009688", 
        dark: "#33ab9f"

}, secondary: {
    light: '#14a37f',
    main: '#1de9b6',
    dark: '#4aedc4',
    contrastText: '#000',
}

  },
})
export default theme