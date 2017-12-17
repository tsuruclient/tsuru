// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { timelineActions } from '../redux/action';
import TimelineView from '../component/TimelineView/TimelineView';

const mapStateToProps = (state: Object): Object => ({
    timelines: state.timeline,
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    setTimelineMenu: bindActionCreators(timelineActions.setTimelineMenu, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineView);
