// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from '../component/Dialog/Dialog';
import * as dialogData from '../redux/selectors/dialog';

const mapStateToProps = (state: Object): Object => ({
    accounts: dialogData.accounts(state),
    addAccountDialog: dialogData.addAccountDialogObject(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
