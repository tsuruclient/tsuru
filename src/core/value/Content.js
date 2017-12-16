// @flow
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
}
