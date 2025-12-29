#!/bin/bash

# =========================================
# Portfolio Site デプロイスクリプト
# Firebase Hosting へデプロイします
# =========================================

set -e  # エラー時に停止

echo "========================================="
echo "🚀 Portfolio Site デプロイ開始"
echo "========================================="
echo ""

# 現在のディレクトリを確認
if [ ! -f "firebase.json" ]; then
    echo "❌ エラー: firebase.json が見つかりません"
    echo "   portfolio-site ディレクトリで実行してください"
    exit 1
fi

# Firebase CLI の確認
if ! command -v firebase &> /dev/null; then
    echo "❌ エラー: firebase コマンドが見つかりません"
    echo "   npm install -g firebase-tools を実行してください"
    exit 1
fi

# Firebase ログイン確認
echo "🔧 Firebase ログイン状態を確認中..."
firebase login:list || {
    echo "⚠️  Firebase にログインが必要です"
    echo ""
    firebase login
}
echo ""

# プロジェクト情報の表示
echo "📦 プロジェクト情報:"
firebase use
echo ""

# public ディレクトリの確認
if [ ! -d "public" ]; then
    echo "❌ エラー: public ディレクトリが見つかりません"
    exit 1
fi

echo "📁 デプロイするファイル:"
echo "   - $(find public -type f | wc -l | tr -d ' ') files"
echo ""

# ビルド（必要に応じて）
# 静的サイトの場合は不要ですが、将来的にビルドステップを追加可能
# echo "🔨 サイトをビルド中..."
# npm run build
# echo ""

# Firebase にデプロイ
echo "🚀 Firebase Hosting にデプロイ中..."
echo ""
firebase deploy --only hosting

echo ""
echo "========================================="
echo "✅ デプロイ完了！"
echo "========================================="
echo ""

# デプロイされたURL情報を取得
FIREBASE_PROJECT=$(firebase use | grep "Now using project" | awk '{print $4}' | tr -d "'")

if [ -n "$FIREBASE_PROJECT" ]; then
    echo "🌐 サイトURL:"
    echo "   https://$FIREBASE_PROJECT.web.app"
    echo "   https://$FIREBASE_PROJECT.firebaseapp.com"
else
    echo "🌐 Firebase Console でURLを確認してください："
    echo "   https://console.firebase.google.com/"
fi

echo ""
echo "📝 カスタムドメイン設定:"
echo "   Firebase Console → Hosting → Add custom domain"
echo "   https://console.firebase.google.com/"
echo ""
echo "========================================="
