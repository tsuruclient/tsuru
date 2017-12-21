// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {dialogActions, authActions} from '../redux/action';
import Dialog from '../component/Dialog/Dialog';
import * as dialogData from '../redux/selectors/dialog';

const mapStateToProps = (state: Object): Object => ({
    accounts: dialogData.accounts(state),
    addAccountDialog: dialogData.addAccountDialogObject(state),
    addTimelineDialog: dialogData.addTimelineDialogObject(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    closeDialog: bindActionCreators(dialogActions.closeDialog, dispatch),
    createTl_selectAccount: bindActionCreators(dialogActions.createTlDialogSelectAccount, dispatch),
    createTl_selectTimelineType: bindActionCreators(dialogActions.createTlDialogSelectTimelineType, dispatch),
    createAc_SelectInstance: bindActionCreators(dialogActions.createAcSelectInstance, dispatch),
    createAc_ForwardInputSection: bindActionCreators(dialogActions.createAcForwardInputData, dispatch),
    createAc_ForwardPinAuthSection: bindActionCreators(dialogActions.createAcForwardPinAuth, dispatch),
    createAc_BackSection: bindActionCreators(dialogActions.createAcBackSection, dispatch),
    createAc_openPinAuthWindow: bindActionCreators(authActions.openPinAuthorizationWindow, dispatch),
    createAc_cancelPinAuth: bindActionCreators(authActions.cancelPinAuthorization, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
