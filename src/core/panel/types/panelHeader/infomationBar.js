// @flow

export type infomationBarMenuItemType = {
    name: string,
    disabled: boolean,
    procedure: Function,
}

export type infomationBarMenuListType = {
    [key_name: string]: infomationBarMenuItemType,
}

export type infomationBarType = {
    title: string,
    screen_name: string,
    domain_name: string,
    menu_list: infomationBarMenuListType,
}
