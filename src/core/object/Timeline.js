// @flow

import copyInstance from '../../helper/copyInstance';
import type Content from '../value/Content';

export default class Timeline {
    ownerIndex: number;
    timelineType: string;

    filtering: Object; // TODO: 頼む
    contentText: string;
    replySource: ?Content;
    image: Array<any>;
    error: ?string;

    inProgressCount: number; // if not 0, something is in progress.
    inPosting: boolean;

    inStreaming: boolean;

    latestContentLength: ?number;

    menuOpen: boolean;
    anchorEl: ?Object;

    constructor(ownerIndex: number, timelineType: string, filter: ?Object) {
        this.ownerIndex = ownerIndex;
        this.timelineType = timelineType;
        this.filtering = filter ? filter : {};
        this.contentText = '';
        this.replySource = null;
        this.image = [];
        this.error = null;
        this.inProgressCount = 0;
        this.inPosting = false;
        this.inStreaming = false;
        this.latestContentLength = null;
        this.menuOpen = false;
        this.anchorEl = null;
    }

    updateContentText(value: string): Timeline {
        const r = copyInstance(this);
        r.contentText = value;
        return r;
    }

    setReply(value: ?Content): Timeline {
        const r = copyInstance(this);
        r.replySource = value;
        return r;
    }

    clear(): Timeline {
        const r = copyInstance(this);
        r.contentText = '';
        r.image = [];
        r.replySource = null;
        return r;
    }

    setMenu(anchorEl: ?Object): Timeline {
        const r = copyInstance(this);
        r.menuOpen = !!anchorEl;
        r.anchorEl = anchorEl;
        return r;
    }

    setIsStreaming(isStreaming: boolean): Timeline {
        const r = copyInstance(this);
        r.isStreaming = isStreaming;
        return r;
    }

    setInPosting(isPosting: boolean): Timeline {
        const r = copyInstance(this);
        r.inPosting = isPosting;
        return r;
    }

    setInProgress(status: boolean): Timeline {
        const r = copyInstance(this);
        status ? r.inProgressCount++ : r.inProgressCount--;
        return r;
    }

    setScrollPositionStatus(length: ?number): Timeline {
        const r = copyInstance(this);
        r.latestContentLength = length;
        return r;
    }

    filterling(data: Array<any>): Array<any> {
        let r = data.concat();
        if(this.latestContentLength){
            r.splice(0, r.length - this.latestContentLength);
        }

        // TODO: Filteringをするようにしてください

        return data;
    }

    updateOwnerindex(num: number): Timeline {
        const r = copyInstance(this);
        r.ownerIndex = num;
        return r;
    }

    export(): Object {
        return {
            ownerIndex: this.ownerIndex,
            timelineType: this.timelineType,
            filterling: this.filtering,
        };
    }
}
