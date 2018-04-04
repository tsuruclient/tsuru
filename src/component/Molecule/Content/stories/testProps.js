// @flow

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const yoshinoyaCopipe = '昨日、近所の吉野家行ったんです。吉野家。 \n' +
    'そしたらなんか人がめちゃくちゃいっぱいで座れないんです。 \n' +
    'で、よく見たらなんか垂れ幕下がってて、１５０円引き、とか書いてあるんです。 \n' +
    'もうね、アホかと。馬鹿かと。 \n' +
    'お前らな、１５０円引き如きで普段来てない吉野家に来てんじゃねーよ、ボケが。 \n' +
    '１５０円だよ、１５０円。 \n' +
    'なんか親子連れとかもいるし。一家４人で吉野家か。おめでてーな。 \n' +
    'よーしパパ特盛頼んじゃうぞー、とか言ってるの。もう見てらんない。 \n' +
    'お前らな、１５０円やるからその席空けろと。 \n' +
    '吉野家ってのはな、もっと殺伐としてるべきなんだよ。 \n' +
    'Ｕの字テーブルの向かいに座った奴といつ喧嘩が始まってもおかしくない、 \n' +
    '刺すか刺されるか、そんな雰囲気がいいんじゃねーか。女子供は、すっこんでろ。 \n' +
    'で、やっと座れたかと思ったら、隣の奴が、大盛つゆだくで、とか言ってるんです。 \n' +
    'そこでまたぶち切れですよ。 \n' +
    'あのな、つゆだくなんてきょうび流行んねーんだよ。ボケが。 \n' +
    '得意げな顔して何が、つゆだくで、だ。 \n' +
    'お前は本当につゆだくを食いたいのかと問いたい。問い詰めたい。小１時間問い詰めたい。 \n' +
    'お前、つゆだくって言いたいだけちゃうんかと。 \n' +
    '吉野家通の俺から言わせてもらえば今、吉野家通の間での最新流行はやっぱり、 \n' +
    'ねぎだく、これだね。 \n' +
    '大盛りねぎだくギョク。これが通の頼み方。 \n' +
    'ねぎだくってのはねぎが多めに入ってる。そん代わり肉が少なめ。これ。 \n' +
    'で、それに大盛りギョク（玉子）。これ最強。 \n' +
    'しかしこれを頼むと次から店員にマークされるという危険も伴う、諸刃の剣。 \n' +
    '素人にはお薦め出来ない。 \n' +
    'まあお前らド素人は、牛鮭定食でも食ってなさいってこった。';

const avatarSource = 'https://avatars0.githubusercontent.com/u/5967271';

export default {
    data: {
        normal: {
            user: {
                avatar: avatarSource,
                displayName: 'ONOUE Origami',
                screenName: 'FirstStar',
            },
            content: dummyText,
        },
        longDisplayName: {
            user: {
                avatar: avatarSource,
                displayName: 'ONOUE Origami as arclisp as schemelisp as Origamium',
                screenName: 'FirstStar',
            },
            content: dummyText,
        },
        longScreenName: {
            user: {
                avatar: avatarSource,
                displayName: 'ONOUE Origami',
                screenName: 'superlonglonglonglonglonglonglongsoooooooooolongscreenname',
            },
            content: dummyText,
        },
        bothNameLong: {
            user: {
                avatar: avatarSource,
                displayName: 'ONOUE Origami as arclisp as schemelisp as Origamium',
                screenName: 'superlonglonglonglonglonglonglongsoooooooooolongscreenname',
            },
            content: dummyText,
        },
        longContent: {
            user: {
                avatar: avatarSource,
                displayName: 'ONOUE Origami',
                screenName: 'FirstStar',
            },
            content: dummyText+dummyText+dummyText+dummyText+dummyText,
        },
        yoshinoyaCopipe: {
            user: {
                avatar: avatarSource,
                displayName: 'ONOUE Origami',
                screenName: 'FirstStar',
            },
            content: yoshinoyaCopipe,
        },
        yoshinoyaCopipeNotBreakline: {
            user: {
                avatar: avatarSource,
                displayName: 'ONOUE Origami',
                screenName: 'FirstStar',
            },
            content: yoshinoyaCopipe.replace(' \n', ''),
        },
    },
    handler: {
        normal: {

        },
    }
}
