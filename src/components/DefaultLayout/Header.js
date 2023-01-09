import PropTypes from 'prop-types';
import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import {
    changeLayoutMode,
} from "../../store/actions";

import { layoutModeTypes } from "../../constants/layout";

const Header = props => {

    console.log('props', props);

    const onChangeLayoutMode = pType => {
        dispatch(changeLayoutMode(pType));
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeLayoutMode("light"));
    }, [dispatch]);

    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="display-5">Dashboard <span className="vr"></span> <span className="display-6">Table Components</span></h2>

                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="radioLight" autoComplete="off"
                                value={layoutModeTypes.LIGHT}
                                checked={props.layoutModeType === layoutModeTypes.LIGHT}
                                onChange={e => {
                                    if (e.target.checked) {
                                        onChangeLayoutMode(e.target.value);
                                    }
                                }}
                            />
                            <label className="btn btn-outline-primary" htmlFor="radioLight">Light</label>

                            <input type="radio" className="btn-check" name="btnradio" id="radioDark" autoComplete="off"
                                value={layoutModeTypes.DARK}
                                checked={props.layoutModeType === layoutModeTypes.DARK}
                                onChange={e => {
                                    if (e.target.checked) {
                                        onChangeLayoutMode(e.target.value);
                                    }
                                }}
                            />
                            <label className="btn btn-outline-primary" htmlFor="radioDark">Dark</label>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

Header.propTypes = {
    t: PropTypes.any,
    changeLayoutMode: PropTypes.func,
    layoutModeType: PropTypes.any,
};

const mapStatetoProps = state => {
    return { ...state.Layout };
};

export default connect(mapStatetoProps, { changeLayoutMode })(Header);
