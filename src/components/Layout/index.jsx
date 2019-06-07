import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';

const Layout = props => {
  const { children, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <Header>
        <Grid>
          <Navigation routes={[routes.INDEX, routes.PAGE_2, routes.PROJECTS, routes.SEARCH]} />
        </Grid>
      </Header>
      <main>
        <Grid>{children}</Grid>
      </main>
      <Footer>
        <Grid>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Grid>
      </Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
