// @flow
import Content from '../difference/content';
import User from './User';

export const Normal = 'Normal';
export const Reply = 'Reply';
export const Retweeted = 'Retweeted';

export default class Content {
    type: string;

    id: string | number;
    user: User;
    content: string;

    sourceUser: ?User;

    target: ?Content;
    targetId: ?string | number;

    inReplyToId: ?string;
    inReplyToAccountId: ?string;
    inReplyToScreenName: ?string;

    retweetCount: number;
    favoriteCount: number;

    retweeted: boolean;
    favorited: boolean;

    constructor(service: string, data: Object) {
        this.type = Normal;
        this.id = data[Content.id[service]];
        this.user = new User(service, data[Content.user[service]]);
        this.content = data[Content.text[service]];
        
        if(data[Content.inReplyToId[service]]) {
            this.inReplyToId = data[Content.inReplyToId[service]];
            this.inReplyToAccountId = data[Content.inReplyToAccountId[service]];
            this.type = Reply;
        }

        if(data[Content.retweetedTweet[service]]){
            this.type = Retweeted;
            this.target = new Content(service, data[Content.retweetedTweet[service]]);
        }
    }
}
