# 導入
SvelteKitとmicroCMSでブログサイトを作成します。

## 環境
* node v14.16.1

projectディレクトリを作成してそこで作業します。
```
$ cd project
$ yarn
```

.envを作成して、microCMSのサービスIDとX-API-KEYを追記します。

```
// project/.env
VITE_API_KEY=ここにX-API-KEY
VITE_API_ENDPOINT=ここにサービスID
```

## 起動する
```
$ yarn dev -o
```
* /blogで記事の一覧と詳細ページへのリンク
* /blog/記事のスラッグ
が表示されていればokです。
