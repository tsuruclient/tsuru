// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { dialogActions, accountActions, apiActions, streamingActions, styleActions } from '../redux/action';
import { accounts } from '../redux/selectors/sidebar';
import Sidebar from '../component/Sidebar/Sidebar';

const mapStateToProps = (state: Object): Object => ({
    accounts: accounts(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    openDialog: bindActionCreators(dialogActions.openDialog, dispatch),
    logout: bindActionCreators(accountActions.requestLogout, dispatch),
    callApi: bindActionCreators(apiActions.requestCallApi, dispatch),
    connectStream: bindActionCreators(streamingActions.requestConnectStreamingApi, dispatch),
    applyTheme: bindActionCreators(styleActions.applyTheme, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
