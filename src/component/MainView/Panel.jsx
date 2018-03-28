// @flow
import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import InfoBar from './PanelView/Parts/InfomationTopBar/InfomationTop';
import ContentForm from './PanelView/Parts/Form/ContentForm';
import ContentList from './PanelView/Parts/ContentList/ContentList';

const Body = styled(Paper)`
    margin: 3px;
    width: 320px;
    maxWidth: 320px;
    minWidth: 320px;
    height: calc(100% - 6px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

type Props = {
    timeline: Object,
    timelineIndex: number,
    ownerInfo: Object,
    isStreaming: boolean,
    contents: Array<any>,
    latestContentId: ?string,
    contentFormContent: Object,
    setTimelineMenu: Function,
    updateContentText: Function,
    setReply: Function,
    callApi: Function,
    deleteTimeline: Function,
    setScrollPosition: Function,
};

const Column = (props: Props) => (
    <Body>
        <InfoBar
            timelineIndex={props.timelineIndex}
            timeline={props.timeline}
            ownerInfo={props.ownerInfo}
            isStreaming={props.isStreaming}
            latestContentId={props.latestContentId}
            menuOpen={props.timeline.menuOpen}
            anchorEl={props.timeline.anchorEl}
            setTimelineMenu={props.setTimelineMenu}
            callApi={props.callApi}
            deleteTimeline={props.deleteTimeline} />
        <ContentForm
            timelineIndex={props.timelineIndex}
            service={props.ownerInfo.service}
            contentFormContent={props.contentFormContent}
            timelineType={props.timeline.timelineType}
            ownerIndex={props.timeline.ownerIndex}
            replySource={props.timeline.replySource}
            updateContentText={props.updateContentText}
            setReply={props.setReply}
            callApi={props.callApi} />
        <ContentList
            service={props.ownerInfo.service}
            timelineIndex={props.timelineIndex}
            ownerIndex={props.timeline.ownerIndex}
            isScrolled={!!props.timeline.latestContentLength}
            callApi={props.callApi}
            setReply={props.setReply}
            contents={props.contents}
            setScrollPosition={props.setScrollPosition} />
    </Body>
);

export default pure(Column);
