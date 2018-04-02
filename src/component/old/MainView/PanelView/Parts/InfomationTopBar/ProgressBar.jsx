// @flow

import React from 'react'
import {pure} from 'recompose';
import styled from 'styled-components';
import { LinearProgress } from 'material-ui/Progress';

const Blank = styled.div`
    width: 100%;
    height: 2px;
    max-height: 2px;
    min-height: 2px;
    background: rgba(0, 0, 0, 0.3);
`;

const Streaming = styled.div`
    width: 100%;
    height: 2px;
    max-height: 2px;
    min-height: 2px;
    background: #469AF0;
`;

const Progress = styled(LinearProgress)`
    width: 100%;
    height: 2px;
    max-height: 2px;
    min-height: 2px;
`;


type Props = {
    inProgressCount: number,
    inStreaming: boolean,
};

const PropgressBar = (props: Props) => {
    if(props.inStreaming){
        return <Streaming/>;
    }else if(props.inProgressCount > 0) {
        return <Progress/>
    }else {
        return <Blank/>;
    }
};

export default pure(PropgressBar);
