// @flow
import React from 'react'
import {pure} from 'recompose';
import styled from 'styled-components';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import StarIcon from 'material-ui-icons/Star';
import RepeatIcon from 'material-ui-icons/Repeat';

import MiniContentCard from '../Parts/MiniContentCard';

import {FavoriteEvent} from '../../../../../core/view/value/Event';

const Styled = {
    Root: styled.div`
        padding: 2px 5px;
    `,
    Info: styled.div`
        display: flex;
        margin: 4px 0px;
    `,
    Card: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    Avatar: styled(Avatar)`
        width: 20px !important;
        height: 20px !important;
        margin: 0px 4px;
    `
};

const style = theme => ({
    starIcon: {
        width: '20px',
        height: '20px',
        fill: '#E5BD3B',
        margin: '0px 4px'
    },
    repeatIcon: {
        width: '20px',
        height: '20px',
        fill: '#4EBD67',
        margin: '0px 4px'
    },
});

type Props = {
    classes: Object,
    data: Object,
};

const eventIcon = (type: string, likeclass: Object, rtclass: Object) => {
    return type === FavoriteEvent ? (<StarIcon className={likeclass} />) : (<RepeatIcon className={rtclass} />)
};

const eventContent = (type: string) => {
    return type === FavoriteEvent ? ' liked ' : ' retweeted ';
};

const ReactionContent = (props: Props) => (
    <Styled.Root>
        <Styled.Info>
            {eventIcon(props.data.type, props.classes.starIcon, props.classes.repeatIcon)}
            <Styled.Avatar src={props.data.sourceUser.avatar} />
            <Typography variant="body1">
                {props.data.sourceUser.displayName + eventContent(props.data.type) + 'your tweet'}
            </Typography>
        </Styled.Info>
        <Styled.Card>
            <MiniContentCard
                avatar={props.data.target.user.avatar}
                content={props.data.target.content} />
        </Styled.Card>
    </Styled.Root>
);

export default pure(withStyles(style)(ReactionContent));
