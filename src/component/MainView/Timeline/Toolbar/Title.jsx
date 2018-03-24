// @flow

import React from 'react'
import {pure} from 'recompose'
import styled from 'styled-components';
import Typography from 'material-ui/Typography';

const Root = styled.div`
    user-select: none;
`;

type Props = {
    timelineName: string,
    ownerInfo: Object,
};

const Title = (props: Props) => (
    <Root>
        <Typography variant="headline" style={{marginBottom: "-8px"}}>
            {props.timelineName}
        </Typography>
        <br />
        <Typography variant="caption" style={{marginTop: "-8px"}}>
            {props.ownerInfo.screenName + '@' + props.ownerInfo.domain}
        </Typography>
    </Root>
);

export default pure(Title);
