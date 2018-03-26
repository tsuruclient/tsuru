// @flow

export type Content = {
    click: {
        icon: ?string, // default: 'user_info'
        name: ?string, // default: 'user_info'
        text: ?string, // default: undefined
        date: ?string, // default: 'content_detail'
    },
    double_click: {
        icon: ?string, // default: 'user_info'
        name: ?string, // default: 'user_info'
        text: ?string, // default: 'content_detail'
        date: ?string, // default: 'content_detail'
    }
};
