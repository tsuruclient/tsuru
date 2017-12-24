// @flow

import copyInstance from '../../helper/copyInstance';

export default class Timeline {
    ownerIndex: number;
    timelineType: string;
    
    filtering: Object; // TODO: 頼む
    contentText: string;
    image: Array<any>;
    error: ?string;

    inProgressCount: number; // if not 0, something is in progress.
    
    inStreaming: boolean;

    menuOpen: boolean;
    anchorEl: ?Object;

    constructor(ownerIndex: number, timelineType: string, filter: ?Object) {
        this.ownerIndex = ownerIndex;
        this.timelineType = timelineType;
        this.filtering = filter ? filter : {};
        this.contentText = '';
        this.image = [];
        this.error = null;
        this.inProgressCount = 0;
        this.inStreaming = false;
        this.menuOpen = false;
        this.anchorEl = null;
    }

    updateContentText(value: string): Timeline {
        const r = copyInstance(this);
        r.contentText = value;
        return r;
    }

    clear(): Timeline {
        const r = copyInstance(this);
        r.contentText = '';
        r.image = [];
        return r;
    }

    setMenu(anchorEl: ?Object): Timeline {
        const r = copyInstance(this);
        r.menuOpen = anchorEl ? true : false;
        r.anchorEl = anchorEl;
        return r;
    }

    setIsStreaming(isStreaming: boolean): Timeline {
        const r = copyInstance(this);
        r.isStreaming = isStreaming;
        return r;
    }

    setInProgress(status: boolean): Timeline {
        const r = copyInstance(this);
        status ? r.inProgressCount++ : r.inProgressCount--;
        return r;
    }

    filterling(data: Array<any>): Array<any> {
        return data;
    }
    
    export(): Object {
        return {
            ownerIndex: this.ownerIndex,
            timelineType: this.timelineType,
            filterling: this.filtering,
        };
    }
}
