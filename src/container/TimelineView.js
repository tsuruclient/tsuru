// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../redux/selectors/timeline';
import { timelineActions } from '../redux/action';
import TimelineView from '../component/TimelineView/TimelineView';

const mapStateToProps = (state: Object): Object => ({
    timelines: state.timeline,
    contentBoxText: selectors.contentBoxText(state),
    service: selectors.service(state),
    contents: selectors.contents(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    setTimelineMenu: bindActionCreators(timelineActions.setTimelineMenu, dispatch),
    updateContentText: bindActionCreators(timelineActions.updateContentText, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineView);
