// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {dialogActions} from '../redux/action';
import Dialog from '../component/Dialog/Dialog';
import * as dialogData from '../redux/selectors/dialog';

const mapStateToProps = (state: Object): Object => ({
    accounts: dialogData.accounts(state),
    addAccountDialog: dialogData.addAccountDialogObject(state),
    addTimelineDialog: dialogData.addTimelineDialogObject(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    openDialog: bindActionCreators(dialogActions.openDialog, dispatch),
    closeDialog: bindActionCreators(dialogActions.closeDialog, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
