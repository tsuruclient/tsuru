import React from 'react';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';

import RepeatIcon from '../../../Atom/Icon/Repeat';
import FavoriteIcon from '../../../Atom/Icon/Favorite';
import StatusCard from '../../Card/StatusCard';

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
};

type Props = {
    data: Object,
}

const info = (type: string) => (
    type === 'favorite' ? (
        <Styled.Info>
            <FavoriteIcon/>
            <Typography variant="body1">{'liked'}</Typography>
        </Styled.Info>
    ) : (
        <Styled.Infot>
            <RepeatIcon/>
            <Typography variant="body1">{'favorited'}</Typography>
        </Styled.Infot>
    )
);

const Event = (props: Props) => (
    <Styled.Root>
        {info(props.type)}
        <Styled.Card>
            <StatusCard
                avatar={data.user.avatar}
                content={}/>
        </Styled.Card>
    </Styled.Root>
);

export default Event;
