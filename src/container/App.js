// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { devOptionActions } from '../redux/action';

import App from '../component/App';

const mapStateToProps = (state: Object): Object => ({
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    setDevData: bindActionCreators(devOptionActions.setDevData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
