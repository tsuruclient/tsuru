// @flow

import React from 'react';
import ContentObject from '../../../../../core/view/value/Content';

import Content from './Content';
import Event from './Notification';

type Props = {
    data: Object,
    style: Object,
    measure: Function,
    service: string,
    timelineIndex: number,
    ownerIndex: number,
    callApi: Function,
    setReply: Function,
}

class Contents extends React.PureComponent<Props> {
    render() {
        const props = this.props;
        return (<div onLoad={props.measure} style={props.style}>
            {props.data instanceof ContentObject ?
                <Content
                    service={props.service}
                    timelineIndex={props.timelineIndex}
                    ownerIndex={props.ownerIndex}
                    data={props.data}
                    callApi={props.callApi}
                    setReply={props.setReply}/> :
                <Event
                    data={props.data}/>}
        </div>);
    }
}

export default Contents;
