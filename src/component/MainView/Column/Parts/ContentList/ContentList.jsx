// @flow

import React from 'react';
import styled from 'styled-components';
import {AutoSizer, CellMeasurer, CellMeasurerCache, List} from 'react-virtualized';

import Contents from './Content/Contents';

const Row = styled.article`
    height: 100%;
`;

type Props = {
    timelineIndex: number,
    ownerIndex: number,
    isScrolled: boolean,
    service: string,
    contents: Array<any>,
    callApi: Function,
    setReply: Function,
    setScrollPosition: Function,
};

class ContentList extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        this._cache = new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 50,
        });
        this._onScroll = this._onScroll.bind(this);
        this._rowRenderer = this._rowRenderer.bind(this);
    }
    _cache : any;
    _onScroll: Function;
    _rowRenderer: Function;

    _onScroll({ clientHeight, scrollHeight, scrollTop }) {
        if(scrollTop > 64 && !this.props.isScrolled) {
            this.props.setScrollPosition({timelineIndex: this.props.timelineIndex, length: this.props.contents.length});
        }else if(scrollTop <= 64 && this.props.isScrolled) {
            this.props.setScrollPosition({timelineIndex: this.props.timelineIndex, length: null})
        }
    }

    _rowRenderer({index, key, parent, style}) {
        const props = this.props;
        return (
            <CellMeasurer
                cache={this._cache}
                key={key}
                rowIndex={index}
                parent={parent}>
                {({measure}) => (
                    <Contents
                        key={key}
                        data={this.props.contents[index]}
                        style={style}
                        measure={measure}
                        service={props.service}
                        timelineIndex={props.timelineIndex}
                        ownerIndex={props.ownerIndex}
                        callApi={props.callApi}
                        setReply={props.setReply}/>
                )}
            </CellMeasurer>

        )
    }

    render() {
        return (
            <Row>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                            width={width}
                            height={height}
                            deferredMeasurementCache={this._cache}
                            rowHeight={this._cache.rowHeight}
                            rowCount={this.props.contents.length}
                            rowRenderer={this._rowRenderer}
                            onScroll={this._onScroll}/>
                    )}
                </AutoSizer>
            </Row>
        );
    }
}

export default ContentList;
