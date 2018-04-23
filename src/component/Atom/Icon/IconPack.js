// @flow
import Favorite from 'material-ui-icons/Favorite';
import Repeat from 'material-ui-icons/Repeat';
import Reply from 'material-ui-icons/Reply';
import IconGenerator from './IconGenerator';

//TODO: Apply Theme

export const ReactionIconPack = (theme: Object) => ({
    Favorite: IconGenerator(Favorite, 24),
    Repeat: IconGenerator(Repeat, 24),
    Reply: IconGenerator(Reply, 24),
});
