import { extendTheme } from '@chakra-ui/react';
import '@fontsource/montserrat';

const theme = extendTheme({
  fonts: {
    heading: `'montserrat', sans-serif`,
    body: `'montserrat', sans-serif`,
  },
});

export default theme;
