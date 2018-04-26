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

export const FavoriteIcon = IconGenerator(Favorite);
export const RepeatIcon = IconGenerator(Repeat);
export const ReplyIcon = IconGenerator(Reply);

export const ReactionIconPack = (theme: Object, events: Events) => ({
    Favorite: IconButtonGenerator(FavoriteIcon, events.Favorite.onClick),
    Repeat: IconButtonGenerator(RepeatIcon, events.Repeat.onClick),
    Reply: IconButtonGenerator(ReplyIcon, events.Reply.onClick),
});

