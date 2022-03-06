import { createTheme } from '@mui/material';
import { backgroundColor } from './colors';

const theme = createTheme({
  palette: {
    main: backgroundColor,
    contrastText: 'white'
  }
})
export default theme