// @flow
import React from 'react'
import UserCard from '../UserCard';
import StatusCard from '../StatusCard';

const dummyText =
    {
        short: 'It\'s time to move.',
        long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
const avatarSource = 'https://avatars0.githubusercontent.com/u/5967271';
const headerSource = 'https://pbs.twimg.com/profile_banners/838224048/1430527658';

const userObject = {
    header: headerSource,
    avatar: avatarSource,
    displayName: '東武鉄道遅延伝説2049',
    screenName: 'arclisp',
};

export default () => (
    <article>
        <h1>Card</h1>
        <h2>User Card</h2>
        <section style={{display: 'flex'}}>
            <div>
                <UserCard user={userObject}/>
            </div>
        </section>
        <h2>Status Card</h2>
        <section style={{display: 'flex'}}>
            <div style={{maxWidth: '400px'}}>
                <h3>Short Text</h3>
                <h4>Actual Text</h4>
                <small style={{color: 'green'}}>{dummyText.short}</small>
                <h4>Result</h4>
                <StatusCard data={{user: {avatar: avatarSource}, content: {text: dummyText.short}}}/>
            </div>
            <div style={{maxWidth: '400px'}}>
                <h3>Long Text</h3>
                <h4>Actual Text</h4>
                <small style={{color: 'green'}}>{dummyText.long}</small>
                <h4>Result</h4>
                <StatusCard data={{user: {avatar: avatarSource}, content: {text: dummyText.long}}}/>
            </div>
        </section>
    </article>
)
