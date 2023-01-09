import logo from './logo.svg';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Authmiddleware from "./routes/route";
// import './App.css';
import { authProtectedRoutes, publicRoutes } from "./routes";
import "./assets/scss/theme.scss";

import DefaultLayout from "./components/DefaultLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

const App = props => {  
  function getLayout() {
    let layoutCls = DefaultLayout;
    switch (props.layout.layoutType) {
      default:
        layoutCls = DefaultLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
