// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../redux/selectors/timeline';
import { timelineActions, apiActions } from '../redux/action';
import TimelineView from '../component/TimelineView/TimelineView';

const mapStateToProps = (state: Object): Object => ({
    timelines: state.timeline,
    contentBoxText: selectors.contentBoxText(state),
    contents: selectors.contents(state),
    ownerInfo: selectors.ownerInfo(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    setTimelineMenu: bindActionCreators(timelineActions.setTimelineMenu, dispatch),
    updateContentText: bindActionCreators(timelineActions.updateContentText, dispatch),
    callApi: bindActionCreators(apiActions.requestCallApi, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineView);
