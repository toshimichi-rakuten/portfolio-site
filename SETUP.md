# Firebase自動デプロイ設定（スマホまたはブラウザで完結）

## 🎯 最も簡単な方法: Firebase GitHub App

トークン生成不要！ブラウザだけで設定できます。

### ステップ1: Firebaseプロジェクト作成

スマホまたはPCのブラウザで：

1. https://console.firebase.google.com/ にアクセス
2. 個人アカウント（toshimichi19990121@gmail.com）でログイン
3. 「プロジェクトを追加」をクリック
4. プロジェクト名: `portfolio-toshimichi`
5. Google Analyticsは「今は設定しない」を選択
6. 「プロジェクトを作成」

### ステップ2: Hosting を有効化

1. 左メニューから「構築」→「Hosting」を選択
2. 「始める」をクリック
3. Firebase CLIの指示は**スキップ**（後で自動化するので不要）
4. 「次へ」を何度かクリックして完了

### ステップ3: GitHub連携を設定

1. Hosting画面で「GitHub に接続」を探す
   - または https://console.firebase.google.com/project/portfolio-toshimichi/hosting/sites にアクセス
2. 「GitHub に接続」をクリック
3. GitHubアカウントでログイン（toshimichi.suzuki@rakuten.com）
4. リポジトリを選択: `toshimichi-rakuten/portfolio-site`
5. アクセスを許可

### ステップ4: 自動デプロイ設定

GitHub連携後、以下を設定：

**ブランチ**: `main`
**ビルドコマンド**: 空白（静的サイトなので不要）
**公開ディレクトリ**: `public`

「保存してデプロイ」をクリック

### ステップ5: 完了！

これで、`main`ブランチにpushするたびに自動デプロイされます！

---

## 📱 スマホでトークン生成（代替方法）

もしGitHub App連携ができない場合：

### Android（Termux）

1. Google Play Storeから「Termux」をインストール
2. Termuxを開いて以下を実行：

```bash
pkg update
pkg install nodejs-lts
npm install -g firebase-tools

# ブラウザでログイン
firebase login:ci
```

### iOS（iSH Shell）

1. App Storeから「iSH Shell」をインストール
2. iSHを開いて以下を実行：

```bash
apk update
apk add nodejs npm
npm install -g firebase-tools

# ブラウザでログイン
firebase login:ci
```

生成されたトークンを：
1. https://github.com/toshimichi-rakuten/portfolio-site/settings/secrets/actions
2. 「New repository secret」
3. Name: `FIREBASE_TOKEN`
4. Value: トークンを貼り付け

---

## 🌐 ブラウザで完結（GitHub Codespaces）

1. https://github.com/toshimichi-rakuten/portfolio-site にアクセス
2. 「Code」→「Codespaces」→「Create codespace on main」
3. ブラウザ内でVS Codeが起動
4. ターミナルで実行：

```bash
npm install -g firebase-tools
firebase login --no-localhost
```

5. 表示されたURLをブラウザで開いてログイン
6. トークンをコピー
7. GitHub Secretsに追加

---

## ✅ 推奨順位

1. **Firebase GitHub App**（最も簡単・推奨）
   - トークン不要
   - ブラウザだけで完結
   - 5分で設定完了

2. **GitHub Codespaces**（代替案）
   - ブラウザ内でLinux環境
   - トークン生成可能
   - 無料枠あり

3. **スマホアプリ（Termux/iSH）**（最終手段）
   - アプリインストール必要
   - 操作が少し複雑

---

## 🚀 デプロイ後のURL

設定完了後、以下のURLでアクセスできます：

- `https://portfolio-toshimichi.web.app`
- `https://portfolio-toshimichi.firebaseapp.com`

## 💰 コスト

- **ホスティング**: 無料（10GB/月まで）
- **SSL証明書**: 無料（自動）
- **CDN**: 無料（含まれる）
- **合計**: **0円**

ドメイン（toshimichi-suzuki.com）を取得する場合のみ年間約1,800円
