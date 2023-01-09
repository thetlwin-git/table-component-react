import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { withRouter } from "react-router-dom";
import {
  changeLayoutMode,
} from "../../store/actions";

import Header from "./Header";
import Footer from "./Footer";

import { useSelector, useDispatch } from "react-redux";

const Layout = props => {
  const dispatch = useDispatch();

  const {
    layoutModeType
  } = useSelector(state => ({
    layoutModeType : state.Layout.layoutModeType,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
    }
  }, [layoutModeType, dispatch]);

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header id="header"/>
        <div className="main-content">{props.children}</div>
        <Footer id="footer"/>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(Layout);
