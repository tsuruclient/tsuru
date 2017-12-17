// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimelineView from '../component/TimelineView/TimelineView';

const mapStateToProps = (state: Object): Object => ({
    timelines: state.timeline,
});

const mapDispatchToProps = (dispatch: Function): Object => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineView);
