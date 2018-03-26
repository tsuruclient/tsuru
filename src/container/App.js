// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generalActions } from '../redux/action';
import {theme} from '../redux/selector/app';
import App from '../component/App';

const mapStateToProps = (state: Object): Object => ({
    theme: theme(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    initApp: bindActionCreators(generalActions.initApp, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
