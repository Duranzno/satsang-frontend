import "../src/styles/global.scss"
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../src/interfaces/theme';


//TODO: Implement MSW on Storybook
// Storybook executes this module in both bootstap phase (Node)
// and a story's runtime (browser). However, cannot call `setupWorker`
// in Node environment, so need to check if we're in a browser.
// if (typeof global.process === 'undefined') {
//     const { worker } = require('../mocks/browser')

//     // Start the mocking when each story is loaded.
//     // Repetitive calls to the `.start()` method do not register a new worker,
//     // but check whether there's an existing once, reusing it, if so.
//     worker.start()
// }

// .storybook/preview.js


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];