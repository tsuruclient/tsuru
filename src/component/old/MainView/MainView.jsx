// @flow

import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';

import Panel from './Panel';

import timelineTypes from '../../core/old/constant/timelineType';

const Main = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    overflow-x: auto;
`;

type Props = {
    classes: Object,
    timelines: Array<Object>,
    ownerInfo: Function,
    isStreaming: Function,
    contents: Function,
    latestContentId: Function,
    contentBoxText: Function,
    updateContentText: Function,
    setTimelineMenu: Function,
    setReply: Function,
    callApi: Function,
    deleteTimeline: Function,
    setScrollPosition: Function,
};

const MainVIew = (props: Props) => (
    <Main>
        {props.timelines.map((item: Object, index: number): any => (
            <Panel
                key={index} // TODO: key=index is deprecated
                timeline={item}
                timelineIndex={index}
                ownerInfo={props.ownerInfo(item.ownerIndex)}
                isStreaming={props.isStreaming(item.ownerIndex)}
                contentFormContent={props.contentBoxText(index)}
                contents={props.contents(item.ownerIndex, index, timelineTypes[item.timelineType].dataname)}
                setTimelineMenu={props.setTimelineMenu}
                latestContentId={props.latestContentId(item.ownerIndex, timelineTypes[item.timelineType].dataname)}
                updateContentText={props.updateContentText}
                setReply={props.setReply}
                callApi={props.callApi}
                deleteTimeline={props.deleteTimeline}
                setScrollPosition={props.setScrollPosition}/>
        ))}
    </Main>
);

export default pure(MainVIew);
