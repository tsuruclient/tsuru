// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../redux/selectors/timeline';
import { timelineActions, apiActions, contentActions } from '../redux/action';
import TimelineView from '../component/TimelineView/MainView';

const mapStateToProps = (state: Object): Object => ({
    timelines: state.timeline,
    contentBoxText: selectors.contentBoxText(state),
    contents: selectors.contents(state),
    latestContentId: selectors.latestContentId(state),
    ownerInfo: selectors.ownerInfo(state),
    isStreaming: selectors.isStreaming(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    setTimelineMenu: bindActionCreators(timelineActions.setTimelineMenu, dispatch),
    updateContentText: bindActionCreators(timelineActions.updateContentText, dispatch),
    setReply: bindActionCreators(contentActions.contentSetReply, dispatch),
    callApi: bindActionCreators(apiActions.requestCallApi, dispatch),
    deleteTimeline: bindActionCreators(timelineActions.deleteTimeline, dispatch),
    setScrollPosition: bindActionCreators(timelineActions.setScrollStatus, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineView);
