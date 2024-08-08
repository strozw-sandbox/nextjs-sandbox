# 環境変数についての動作確認

サーバーランタイムの環境変数と、`.env` で指定された環境変数の参照のされかたを確認する。

## 確認方法

### `next dev` のときの動作を確認する

```sh
pnpm dev-with-env
```

### `next build && next start` のときの動作を確認する

```sh
pnpm build-start-with-env
```

## 環境変数

| 名称  | 指定されている箇所         |
| ----- | -------------------------- |
| ENV_A | サーバーランタイム、`.env` |
| ENV_B | サーバーランタイム         |

## コンテンツ

上記の確認方法別に、以下のコンテンツにアクセスする事で、環境変数の参照のされかたを確認できる。

### `/env`

### [/env/dynamic/api](http://localhost:3000/env/dynamic/api)

Dynamic Routes な API における環境変数の参照のされかたを確認する

### [/env/dynamic/page](http://localhost:3000/env/dynamic/page)

Dynamic Routes な Page における環境変数の参照のされかたを確認する

### [/env/static/api](http://localhost:3000/env/static/api)

Dynamic Routes な API における環境変数の参照のされかたを確認する

### [/env/static/page](http://localhost:3000/env/static/page)

Dynamic Routes な Page における環境変数の参照のされかたを確認する
