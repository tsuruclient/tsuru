// @flow

export default class user {
    instance: ?string;

    displayName: string;
    screenName: string;
    id: string;

    avatar: string;
    header: string;

    bio: string;
    url: string;
    location: ?string;
    isLocked: boolean;

    contentCount: number;
    followCount: number;
    followerCount: number;
}
