import "../src/styles/global.scss"
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from '../src/styles/themes';

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));