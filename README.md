# React + TypeScript でSPAを作る時のテンプレート

vite + React + TypeScriptのテンプレートで開発をはじめるときに、入れたら便利だなと思っているものを追加  

## 追加しているもの

- Biome
  - eslintから変更
  - eslint + prettier の組み合わせでやるよりも動作が軽くて速い
- axios
  - アプリケーション外とのHTTP通信用に追加
- msw
  - ローカル環境でHTTP通信のレスポンスをモックしたいとき用に追加
  - 主にバックエンドのAPIレスポンスをモックする想定
- extensible-custom-error
  - カスタムエラーを作りたいときに便利
  - 良い感じにスタックトレースも見れる
