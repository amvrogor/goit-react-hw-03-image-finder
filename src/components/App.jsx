import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}
