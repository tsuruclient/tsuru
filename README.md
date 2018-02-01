# Tsuru
Twitter, GNU Social, Mastodonのアカウントを一つの画面にまとめて表示できるTweetdeck風クライアントです。  
  
![Tsuru動作画像](./images/ss.png "はい")  
  
Roadmapや進捗状況は以下から確認できます。
* [Tsuru Roadmap](https://trello.com/b/Id3TjFbr/tsuru)
* [Work in progress](https://github.com/tsuruclient/tsuru/projects/3)  
* [Bugtrucker](https://github.com/tsuruclient/tsuru/projects/2)  
  
  
## 自前でビルドする際の注意点
`src/core/constant/instanceList.js` は意図的に除外してあり、import errorを起こします。  
そのため、各自でビルドする際は`src/core/constant/_instanceList.js`を`instanceList.js`にリネームしてください。
  
## 次回リリース予定  
脳がマジでやばくて大遅延しています。ごめんなさい  
  
## Tsuruへの参画  
このプロジェクトには誰でも参加可能です。  
問題の報告、コードの改善とプルリクエストを歓迎します！    
  
## 支援の募集  
Founderである尾上折紙は現在精神的疾病により無職です。金銭的サポートを募集しています。  
  
## LICENSE
このソースコードのすべてはMIT License下において公開されています。
