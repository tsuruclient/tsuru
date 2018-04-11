// @flow
import * as Services from '../../Services';
import content from '../difference/content';
import User from './User';

export const Normal = 'Normal';
export const Reply = 'Reply';
export const Retweeted = 'Retweeted';

export default class Content {
    type: string;

    id: string | number;
    user: User;
    content: string;

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
        this.id = data[content.id[service]];
        this.user = new User(service, data[content.user[service]]);
        this.content = service !== Services.Mastodon ?
            data[content.text[service]] :
            data[content.text[service]].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');

        this.retweeted = data[content.retweeted[service]];
        this.favorited = data[content.favorited[service]];

        if(data[content.inReplyToId[service]]) {
            this.inReplyToId = data[content.inReplyToId[service]];
            this.inReplyToAccountId = data[content.inReplyToAccountId[service]];
            this.type = Reply;
        }

        if(data[content.retweetedTweet[service]]){
            this.type = Retweeted;
            this.target = new Content(service, data[content.retweetedTweet[service]]);
        }
    }
}
