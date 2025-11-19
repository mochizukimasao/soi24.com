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

このプロジェクトは静的サイトとして、複数のプラットフォームでデプロイ可能です。

### デプロイ前のチェックリスト

デプロイ前に以下を確認してください：

- [ ] `index.html` が正しく動作することをローカルで確認
- [ ] 画像やCSSなどのリソースパスが正しいか確認
- [ ] 変更内容をコミット済みか確認

---

## デプロイ方法

### 方法1: GitHub Pages（推奨）

GitHub Pagesは無料で静的サイトをホスティングできます。

#### 初回セットアップ

1. **GitHubリポジトリの設定**
   - GitHubリポジトリのページ（`https://github.com/mochizukimasao/soi24.com`）にアクセス
   - Settings → Pages に移動
   - Source を "Deploy from a branch" に設定
   - Branch を "main" に設定
   - Folder を "/ (root)" に設定
   - Save をクリック

2. **デプロイの確認**
   - 数分後に `https://mochizukimasao.github.io/soi24.com/` でサイトが公開されます
   - または、カスタムドメインが設定されている場合は、そのドメインでアクセス可能です

#### 通常のデプロイ手順

1. **変更をコミット**
   ```bash
   git add .
   git commit -m "Update site"
   ```

2. **GitHubにプッシュ**
   ```bash
   git push origin main
   ```

3. **自動デプロイの確認**
   - GitHubリポジトリの Actions タブでデプロイ状況を確認
   - デプロイには通常1-2分かかります
   - 完了後、サイトが更新されます

**特徴：**
- ✅ 無料
- ✅ `main` ブランチへのプッシュで自動デプロイ
- ✅ HTTPS対応
- ✅ カスタムドメイン対応

---

### 方法2: Netlify

Netlifyは高速なCDNと自動デプロイ機能を提供します。

#### 初回セットアップ

1. **Netlifyアカウントの作成**
   - [Netlify](https://www.netlify.com/) にアクセスしてアカウントを作成
   - GitHubアカウントで連携することを推奨

2. **サイトの追加**
   - "Add new site" → "Import an existing project" を選択
   - GitHubリポジトリ `mochizukimasao/soi24.com` を選択
   - ビルド設定：
     - Build command: （空欄のまま）
     - Publish directory: `/` （または空欄）

3. **デプロイ**
   - "Deploy site" をクリック
   - 数秒でデプロイが完了します

#### 通常のデプロイ手順

GitHubにプッシュするだけで自動的にデプロイされます：

```bash
git add .
git commit -m "Update site"
git push origin main
```

**特徴：**
- ✅ 無料プランあり
- ✅ 高速なCDN
- ✅ 自動デプロイ
- ✅ プレビューデプロイ（PRごと）
- ✅ HTTPS対応
- ✅ カスタムドメイン対応

---

### 方法3: Vercel

VercelはNext.jsに最適化されていますが、静的サイトも簡単にデプロイできます。

#### 初回セットアップ

1. **Vercelアカウントの作成**
   - [Vercel](https://vercel.com/) にアクセスしてアカウントを作成
   - GitHubアカウントで連携することを推奨

2. **プロジェクトのインポート**
   - "Add New Project" をクリック
   - GitHubリポジトリ `mochizukimasao/soi24.com` を選択
   - Framework Preset: "Other" を選択
   - Root Directory: `./` を設定
   - Build Command: （空欄のまま）
   - Output Directory: `./` を設定

3. **デプロイ**
   - "Deploy" をクリック
   - 数秒でデプロイが完了します

#### 通常のデプロイ手順

GitHubにプッシュするだけで自動的にデプロイされます：

```bash
git add .
git commit -m "Update site"
git push origin main
```

**特徴：**
- ✅ 無料プランあり
- ✅ 高速なグローバルCDN
- ✅ 自動デプロイ
- ✅ プレビューデプロイ（PRごと）
- ✅ HTTPS対応
- ✅ カスタムドメイン対応

---

### 方法4: Cloudflare Pages

Cloudflare Pagesは高速で無料のホスティングサービスです。

#### 初回セットアップ

1. **Cloudflareアカウントの作成**
   - [Cloudflare](https://pages.cloudflare.com/) にアクセスしてアカウントを作成

2. **プロジェクトの作成**
   - "Create a project" → "Connect to Git" を選択
   - GitHubリポジトリ `mochizukimasao/soi24.com` を選択
   - ビルド設定：
     - Framework preset: "None" または "Static HTML"
     - Build command: （空欄のまま）
     - Build output directory: `/` を設定

3. **デプロイ**
   - "Save and Deploy" をクリック
   - 数秒でデプロイが完了します

#### 通常のデプロイ手順

GitHubにプッシュするだけで自動的にデプロイされます：

```bash
git add .
git commit -m "Update site"
git push origin main
```

**特徴：**
- ✅ 無料プランあり
- ✅ Cloudflareの高速CDN
- ✅ 無制限の帯域幅
- ✅ 自動デプロイ
- ✅ HTTPS対応
- ✅ カスタムドメイン対応

---

## デプロイ後の確認事項

デプロイが完了したら、以下を確認してください：

- [ ] サイトが正しく表示されるか
- [ ] 画像やCSSが正しく読み込まれているか
- [ ] リンクが正しく動作するか
- [ ] モバイル表示が正しいか
- [ ] HTTPSが有効になっているか

---

## トラブルシューティング

### 画像が表示されない

- 画像のパスが相対パス（`./img/background.png`）になっているか確認
- 画像ファイルがリポジトリに含まれているか確認

### CSSが適用されない

- `index.html` 内のスタイルが正しく記述されているか確認
- 外部CDN（Tailwind CSSなど）が正しく読み込まれているか確認

### デプロイが失敗する

- GitHub Actions やデプロイログを確認
- ファイルパスや構文エラーがないか確認
- ローカルで動作確認を行う

### カスタムドメインの設定

各プラットフォームの設定画面で、カスタムドメインを追加できます。DNS設定が必要な場合があります。

---

## 現在のデプロイ状況

このプロジェクトは現在、**GitHub Pages**でホスティングされています。

- サイトURL: `https://mochizukimasao.github.io/soi24.com/`
- 自動デプロイ: `main` ブランチへのプッシュで自動実行

