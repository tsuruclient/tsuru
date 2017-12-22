// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generalActions } from '../redux/action';

import App from '../component/App';

const mapStateToProps = (state: Object): Object => ({
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    initApp: bindActionCreators(generalActions.initApp, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
