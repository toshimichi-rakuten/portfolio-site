# Portfolio Site - Toshimichi Suzuki

個人ポートフォリオサイト - Firebase Hosting でホスティング

## 概要

このプロジェクトは、鈴木敏道（Toshimichi Suzuki）の個人ポートフォリオサイトです。
Firebase Hosting を使用して、高速かつ低コストで運用されています。

**サイトURL（予定）**: https://toshimichi-suzuki.com

## 技術スタック

- **Frontend**: HTML5, CSS3, JavaScript（Vanilla JS）
- **Hosting**: Firebase Hosting
- **CDN**: Firebase CDN（自動）
- **SSL**: Google管理SSL証明書（自動更新）
- **ドメイン**: Squarespace Domains（旧Google Domains）

## プロジェクト構造

```
portfolio-site/
├── public/                  # 公開ディレクトリ
│   ├── index.html          # トップページ
│   ├── css/
│   │   └── style.css       # スタイルシート
│   ├── js/
│   │   └── main.js         # JavaScript
│   └── images/             # 画像ファイル
├── firebase.json           # Firebase設定
├── .firebaserc            # Firebaseプロジェクト設定
├── deploy.sh              # デプロイスクリプト
└── README.md              # このファイル
```

## セットアップ

### 必要条件

- Node.js (v16以上推奨)
- Firebase CLI
- Googleアカウント（toshimichi19990121@gmail.com）

### 初期設定

1. **Firebase CLI のインストール**
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase ログイン**
   ```bash
   firebase login
   ```

3. **Firebase プロジェクト作成**
   - [Firebase Console](https://console.firebase.google.com/) でプロジェクトを作成
   - プロジェクト名: `portfolio-toshimichi`

4. **プロジェクトの初期化（既に設定済み）**
   ```bash
   cd portfolio-site
   firebase init hosting
   # - Existing project: portfolio-toshimichi
   # - Public directory: public
   # - Single-page app: No
   ```

## デプロイ

### コマンドでデプロイ

```bash
cd /Users/toshimichi.suzuki/Desktop/開発/portfolio-site

# デプロイスクリプトに実行権限を付与
chmod +x deploy.sh

# デプロイ実行
./deploy.sh
```

### または直接 Firebase CLI を使用

```bash
firebase deploy --only hosting
```

### デプロイ後のURL

- メインURL: `https://portfolio-toshimichi.web.app`
- 代替URL: `https://portfolio-toshimichi.firebaseapp.com`

## カスタムドメイン設定

### 1. ドメイン取得

- **サービス**: [Squarespace Domains](https://domains.squarespace.com/)
- **ドメイン**: toshimichi-suzuki.com
- **費用**: 約$12-15/年（約1,800-2,250円）

### 2. Firebase でカスタムドメイン設定

1. [Firebase Console](https://console.firebase.google.com/) を開く
2. プロジェクト選択 → Hosting → **Add custom domain**
3. ドメイン入力: `toshimichi-suzuki.com`
4. 表示されるDNSレコードをSquarespaceに設定

### 3. DNS レコード設定（Squarespace）

```
Type: A
Host: @
Data: [Firebaseが指定するIP 1]

Type: A
Host: @
Data: [Firebaseが指定するIP 2]

Type: CNAME
Host: www
Data: [Firebaseが指定するホスト名]
```

### 4. SSL証明書の自動発行

DNS設定後、Firebaseが自動的にSSL証明書を発行します（数分〜72時間）

## コスト

| 項目 | サービス | 月額 | 年額 |
|------|---------|------|------|
| ホスティング | Firebase Hosting | **0円** | **0円** |
| SSL証明書 | Firebase（自動） | **0円** | **0円** |
| CDN | Firebase（含む） | **0円** | **0円** |
| ドメイン | Squarespace | 150円 | 1,800円 |
| **合計** | | **約150円** | **約1,800円** |

### Firebase 無料枠

- **ストレージ**: 10GB
- **転送量**: 360MB/日（月間約10.8GB）
- **想定トラフィック**: 月間訪問者100-500人 → 無料枠内で十分

## 開発

### ローカル開発サーバー

```bash
# Firebase ローカルサーバーを起動
firebase serve

# ブラウザで確認
open http://localhost:5000
```

### ファイル編集

- **HTML**: `public/index.html`
- **CSS**: `public/css/style.css`
- **JavaScript**: `public/js/main.js`
- **画像**: `public/images/` に配置

## 機能

### 実装済み

- レスポンシブデザイン（モバイル対応）
- スムーススクロール
- ハンバーガーメニュー（モバイル）
- セクションのフェードインアニメーション
- お問い合わせフォーム（UI のみ）

### 今後の拡張予定

- [ ] お問い合わせフォームのバックエンド（Cloud Functions）
- [ ] Google Analytics 4 統合
- [ ] ブログ機能（Firestore）
- [ ] ダークモード切り替え
- [ ] プロジェクト詳細ページ
- [ ] GitHub Actions で CI/CD 自動化

## トラブルシューティング

### デプロイエラー

```bash
# ログインし直す
firebase logout
firebase login

# プロジェクト確認
firebase projects:list

# 強制デプロイ
firebase deploy --only hosting --force
```

### DNS反映が遅い

DNS設定は通常24-48時間かかることがあります。

```bash
# DNS確認
dig toshimichi-suzuki.com
nslookup toshimichi-suzuki.com
```

### SSL証明書が発行されない

- DNS設定が正しいか確認
- Firebase Consoleで状態確認
- 最大72時間待つ

## リンク

- **Firebase Console**: https://console.firebase.google.com/
- **Squarespace Domains**: https://domains.squarespace.com/
- **Firebase Hosting ドキュメント**: https://firebase.google.com/docs/hosting

## ライセンス

© 2025 Toshimichi Suzuki. All rights reserved.

## お問い合わせ

- **Email**: toshimichi19990121@gmail.com
- **サイト**: https://toshimichi-suzuki.com（準備中）

---

**最終更新**: 2025年12月29日
