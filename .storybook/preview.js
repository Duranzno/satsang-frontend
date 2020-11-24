import React, { Component } from 'react';

import "../src/styles/global.scss"
import { ThemeProvider } from '@material-ui/core/styles';
import withExternalLinks from 'storybook-external-links'

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


class Script extends Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.async = true;
    script.src = this.props.src;
    script.onload = () => this.setState({
      loaded: true,
    });

    head.appendChild(script);
  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

// const loadScriptDecorator = src => story => <Script src={src}>{story()}</Script>;

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  },
  (Story) => {
    return (
      <Script src={'https://meet.jit.si/external_api.js'}>
        <Story />
      </Script>
    )
  },
];