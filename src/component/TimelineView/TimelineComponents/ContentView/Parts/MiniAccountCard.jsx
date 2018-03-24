// @flow
import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const Root = styled(Paper)`
    width: 260px;
    height: 100px;
    position: relative;
    margin: 4px;
`;

const Header = styled.div`
    background-image: ${props => 'url(' + props.src + ')'};
    background-size: cover;
    width: 100%;
    height: 100px;
    position: absolute;
`;

const Info = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

const Text = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    minWidth: 80px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type Props = {
    user: Object,
}

const miniAccountInfo = (props: Props) => (
    <Root>
        <Header src={props.user.header} />
        <Info>
            <Avatar src={props.user.avatar} />
            <Text>
                <Typography variant={"body1"}>{props.user.displayName}</Typography>
                <Typography variant={'caption'}>{props.user.screenName}</Typography>
            </Text>
        </Info>
    </Root>
);

export default pure(miniAccountInfo);
