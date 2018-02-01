// @flow

import React from 'react';
import {AutoSizer, CellMeasurer, CellMeasurerCache, List} from 'react-virtualized';
import {onlyUpdateForKeys} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider'

import ContentObject from '../../../../core/value/Content';

import Content from './Content/Content';
import Event from './Content/Notification';

const styles = theme => ({
    root: {
        overflowY: 'auto'
    }
});

type Props = {
    classes: Object,
    timelineIndex: number,
    ownerIndex: number,
    service: string,
    contents: Array<any>,
    callApi: Function,
    setReply: Function,
};

/*
class ContentList extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(index, key) {
        console.log(key);
        const renderTarget = this.props.contents[index];
        const props = this.props;
        return (
            renderTarget instanceof ContentObject ? <div key={key}>
                <Content
                    service={props.service}
                    timelineIndex={props.timelineIndex}
                    ownerIndex={props.ownerIndex}
                    data={renderTarget}
                    callApi={props.callApi}
                    setReply={props.setReply} />
                <Divider />
            </div>:
            <div key={index}>
                <Event data={renderTarget} />
                <Divider />
            </div>
        )
    }

    render() {
        const props = this.props;
        return (
            <div className={props.classes.root}>
                <ReactList
                    itemRenderer={this.renderItem}
                    length={this.props.contents.length}/>
            </div>
        )
    }
}*/

/*
const ContentList = onlyUpdateForKeys(['contents'])((props: Props) => (
    <div className={props.classes.root}>
        {props.contents.map((item, index) => (
            item instanceof ContentObject ?
                <div key={index}>
                    <Content
                        service={props.service}
                        timelineIndex={props.timelineIndex}
                        ownerIndex={props.ownerIndex}
                        data={item}
                        callApi={props.callApi}
                        setReply={props.setReply} />
                    <Divider />
                </div>:
                <div key={index}>
                    <Event data={item} />
                    <Divider />
                </div>
        ))}
    </div>
));
*/

const cache = new CellMeasurerCache({
    defaultHeight: 120,
    fixedWidth: true
});

class ContentList extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        this._cache = new CellMeasurerCache({
            fixedWidth: true,
            minHeight: 50,
        });
    }
    _cache : any;

    _rowRenderer({index, key, parent, style}) {
        const renderTarget = this.props.contents[index];
        const props = this.props;
        return (
            <CellMeasurer
                cache={this._cache}
                key={key}
                rowIndex={index}
                parent={parent}>
                {({measure}) => {
                    return renderTarget instanceof ContentObject ?
                        <div key={index} style={style}>
                            <Content
                                service={props.service}
                                timelineIndex={props.timelineIndex}
                                ownerIndex={props.ownerIndex}
                                data={renderTarget}
                                callApi={props.callApi}
                                setReply={props.setReply}/>
                            <Divider/>
                        </div> :
                        <div key={index} style={style}>
                            <Event data={renderTarget}/>
                            <Divider/>
                        </div>
                }}
            </CellMeasurer>

        )
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                            width={width}
                            height={height}
                            overscanRowCount={6}
                            deferredMeasurementCache={this._cache}
                            rowHeight={this._cache.rowHeight}
                            rowCount={this.props.contents.length}
                            rowRenderer={this._rowRenderer.bind(this)}
                            onScroll={(e) => {console.log(e)}}/>
                    )}
                </AutoSizer>
            </div>
        );
    }
}

export default withStyles(styles)(ContentList);
