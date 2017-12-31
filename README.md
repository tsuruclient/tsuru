# Tsuru
Twitter, GNU Social, Mastodonのアカウントを一つの画面にまとめて表示できるTweetdeck風クライアントです。  
  
![Tsuru動作画像](./images/ver0_1_0_view.jpg "はい")  
  
[RoadmapはTrelloでご覧いただけます](https://trello.com/b/Id3TjFbr)。  
  
# 自前でビルドする際の注意点
`src/core/constant/instanceList.js` は意図的に除外してあり、import errorを起こします。  
そのため、各自でビルドする際は`src/core/constant/_instanceList.js`を`instanceList.js`にリネームしてください。
  
# 現状
だめです。  
現状のビルドをダウンロードして使用することはできますが、バグがありまくりやばいと思われます。やばいので開発をサポートしてくれる人向けです。あと開発をサポートしてください。
  
# LICENSE
MIT License
