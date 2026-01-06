# ブログアプリケーション

Next.js と Fumadocs を使用したモダンなブログアプリケーションです。

🌐 **公開URL**: [https://www.shirashun.com/](https://www.shirashun.com/)

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **UI ライブラリ**: React 19
- **ドキュメントフレームワーク**: Fumadocs
- **スタイリング**: Tailwind CSS 4
- **言語**: TypeScript
- **コンテンツ管理**: MDX

## 主な機能

- 📝 MDX によるブログ記事管理
- 🔍 全文検索機能
- 🗺️ 自動サイトマップ生成
- 🎨 レスポンシブデザイン
- 🏷️ タグ機能
- 📅 日付ベースのソート

## セットアップ

### 前提条件

- Node.js 18 以上
- npm / pnpm / yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## プロジェクト構造

```
.
├── content/              # MDX形式のブログ記事
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── (home)/      # ホームページ関連
│   │   ├── blog/        # ブログページ関連
│   │   └── api/         # API ルート（検索など）
│   ├── components/      # Reactコンポーネント
│   └── lib/            # ユーティリティ関数
├── public/             # 静的ファイル
└── source.config.ts    # Fumadocs設定
```

## ブログ記事の追加

`content/` ディレクトリに新しい `.mdx` ファイルを作成します。

```mdx
---
title: 記事タイトル
description: 記事の説明
date: 2025-01-06
tags: [tag1, tag2]
---

ここに記事の本文を書きます。
```

## スクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - 本番用ビルド
- `npm start` - 本番サーバーの起動
- `npm run postinstall` - MDXファイルの処理（自動実行）
- `npm run postbuild` - サイトマップの生成（自動実行）

## カスタマイズ

### サイトマップの設定

`next-sitemap.config.js` でサイトマップの設定を変更できます。

### スタイリング

Tailwind CSS を使用しています。`tailwind.config.js` でテーマをカスタマイズできます。

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.vercel.app)
- [MDX](https://mdxjs.com)
- [Tailwind CSS](https://tailwindcss.com)

## ライセンス

Private
