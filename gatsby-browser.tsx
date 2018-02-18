import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { store } from './src/store';

interface IProps {
  history: History;
}

exports.replaceRouterComponent = ({ history }: IProps) =>
  ({ children }: {children: React.ReactChildren}) =>
    <Provider store={store} >
      <Router history={history}>{children}</Router>
    </Provider>;
