# soi24

Retro-Future Experiments from Bangkok

## ローカルサーバーでプレビュー

### 方法1: Node.js（推奨）

Node.jsがインストールされている場合：

#### 初回セットアップ

```bash
npm install
```

#### サーバー起動

```bash
npm start
```

サーバーが起動したら、Cursorの内蔵ブラウザで以下のURLを開いてください：

```
http://localhost:3000
```

**Cursorの内蔵ブラウザを開く方法：**
1. Cursorのコマンドパレット（`Cmd + Shift + P`）を開く
2. 「Browser Tab」または「Open Preview」を検索して選択
3. 表示されたブラウザタブに `http://localhost:3000` を入力

### 方法2: Python

Python 3がインストールされている場合：

```bash
python3 -m http.server 3000
```

ブラウザで `http://localhost:3000` にアクセスしてください。

### 方法3: PHP

PHPがインストールされている場合：

```bash
php -S localhost:3000
```

ブラウザで `http://localhost:3000` にアクセスしてください。

---

サーバーを停止するには、ターミナルで `Ctrl + C` を押してください。

## デプロイ

このプロジェクトはGitHub Pagesでホスティングされています。

### デプロイ手順

1. **変更をコミット**
   ```bash
   git add .
   git commit -m "Update site"
   ```

2. **GitHubにプッシュ**
   ```bash
   git push origin main
   ```

3. **GitHub Pagesの設定**
   - GitHubリポジトリのページにアクセス
   - Settings → Pages に移動
   - Source を "Deploy from a branch" に設定
   - Branch を "main" に設定
   - Folder を "/ (root)" に設定
   - Save をクリック

4. **デプロイの確認**
   - 数分後に `https://mochizukimasao.github.io/soi24.com/` でサイトが公開されます
   - または、カスタムドメインが設定されている場合は、そのドメインでアクセス可能です

### 自動デプロイ

GitHub Pagesは、`main` ブランチにプッシュするたびに自動的にデプロイされます。デプロイには通常1-2分かかります。

