// @flow
import React from 'react'
import styled from 'styled-components';
import {pure} from 'recompose';

import Buttons from '../Parts/Buttons';
import Divider from 'material-ui/Divider'

import CommonItem from './Common';
import RetweetedItem from './Retweeted';

import type Content from '../../../../../../core/view/value/Content'
import {Normal, Reply, Retweeted} from '../../../../../../core/view/value/Content';

const Section = styled.section`
    word-wrap : 'break-word';
    overflow-wrap: 'break-word';
`;

type Props = {
    style: any,
    measure: Function,
    service: string,
    timelineIndex: number,
    ownerIndex: number,
    data: Content,
    callApi: Function,
    setReply: Function,
};

const selectComponent = (data: Content) => {
    switch (data.type) {
        case Normal:
        case Reply:
            return (<CommonItem data={data} />);
        case Retweeted:
            return (<RetweetedItem data={data} />);
        default:
            return (<CommonItem data={data} />);
    }
};

const NormalContent = (props: Props) => (
    <Section>
        {selectComponent(props.data)}
        <Buttons
            service={props.service}
            timelineIndex={props.timelineIndex}
            ownerIndex={props.ownerIndex}
            data={props.data}
            callApi={props.callApi}
            setReply={props.setReply} />
        <Divider />
    </Section>
);

export default pure(NormalContent);
