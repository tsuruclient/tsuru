// @flow

import copyInstance from '../../helper/copyInstance';

export default class Timeline {
    ownerIndex: number;
    timelineType: string;
    
    filtering: Object; // TODO: 頼む
    contentText: string;
    image: Array<any>;
    error: ?string;

    inProgress: boolean;
    
    inStreaming: boolean;

    menuOpen: boolean;
    anchorEl: ?Object;

    constructor(ownerIndex: number, timelineType: string) {
        this.ownerIndex = ownerIndex;
        this.timelineType = timelineType;
        this.filtering = {};
        this.contentText = '';
        this.image = [];
        this.error = null;
        this.inProgress = false;
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

    setInProgress(inProgress: boolean): Timeline {
        const r = copyInstance(this);
        r.inProgress = inProgress;
        return r;
    }

    filterling(data: Array<any>): Array<any> {
        return data;
    }
}
