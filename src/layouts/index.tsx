import * as React from 'react';
import { connect } from 'react-redux';

import SiteFooter from '../components/site-footer/site-footer';
import SiteHeader from '../components/site-header/site-header';
import { IStoreState } from '../store';

import * as styles from '../styles/layouts/index.scss';
import '../styles/normalize.css';
import '../styles/prism-vs.css';
import '../styles/theme.scss';

interface IDefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
  visible?: boolean;
}

export const DefaultLayout = ({ location, children, visible }: IDefaultLayoutProps) => {
  return (
    <div>
      <SiteHeader />
      <div className={styles.pageBody}>
        {children()}
      </div>
      <SiteFooter />
    </div>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, IDefaultLayoutProps>(mapStateToProps)(DefaultLayout);