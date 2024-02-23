# npm-library-test-user

## local development

1. Settings > Developer settings > Personal access tokensで `read:packages` 権限の personal access token (classic) を取得する
2. .zshrc などにトークンの値を環境変数 NPM_TOKEN として export する記述を追加し、.npmrc に読み込ませる

.zshrc の例

```
export NPM_TOKEN=<YOUR_GITHUB_PAT>
```
