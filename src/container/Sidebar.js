// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { accounts } from '../redux/selectors/sidebar';
import Sidebar from '../component/Sidebar/Sidebar';

const mapStateToProps = (state: Object): Object => ({
    accounts: accounts(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
