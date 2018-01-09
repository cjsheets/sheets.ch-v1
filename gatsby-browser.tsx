import * as React from 'react';
import { Router } from 'react-router-dom';

exports.replaceRouterComponent = ({ history }) =>
  ({ children }) =>
    <Router history={history}>{children}</Router>;
