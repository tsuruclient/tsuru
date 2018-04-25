// @flow
import Favorite from 'material-ui-icons/Favorite';
import Repeat from 'material-ui-icons/Repeat';
import Reply from 'material-ui-icons/Reply';
import IconButtonGenerator from '../Button/IconButtonGenerator';
import IconGenerator from './IconGenerator';

//TODO: Apply Theme

type Events = {
    Favorite: {onClick: Function},
    Repeat: {onClick: Function},
    Reply: {onClick: Function},
}

export const ReactionIconPack = (theme: Object, events: Events) => ({
    Favorite: IconButtonGenerator(IconGenerator(Favorite), events.Favorite.onClick),
    Repeat: IconButtonGenerator(IconGenerator(Repeat), events.Repeat.onClick),
    Reply: IconButtonGenerator(IconGenerator(Reply), events.Reply.onClick),
});
