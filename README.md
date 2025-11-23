# はじめに

このプロジェクトは、web制作勉強時期に自作した静的ECサイト（HTML/CSS/jQuery）を  
**Next.js（App Router） + SCSS Modules** を用いて再構築したものです。

UIの再現だけでなく、  
**データ構造化・コンポーネント分割・運用改善を意識したリファクタリングプロジェクト** です。

---

## 概要

- もともと自作した静的ECサイト（複数ページ・商品一覧・詳細ページ・スライダー）がベース
- 静的HTML → Next.js（App Router）構成に全面リプレイス
- jQueryベースのギャラリー／スライダー → Reactコンポーネント化
- CSS → SCSS Modules に移行し、コンポーネント単位でスコープ管理
- データ（商品・カテゴリ）を JSON に構造化して、UIロジックを分離
- レイアウト／コンポーネント責務の整理による可読性・保守性向上

---

## このプロジェクトの目的

単なるメイクアップではなく、以下を目的として構築しました：

### 1. **UIをReact/Next.jsで再構築し実務的なコンポーネント設計を学ぶ**

- 複数ページを Next.js App Router で構成
- Header / Footer / CategoryNav / ProductCard / Gallery などコンポーネント化

### 2. **静的HTMLで混在していたUIとデータを分離する**

- data/products.json
- data/categories.json
- 各ページは JSON データを読み込み描画

### 3. **SCSS Modules によりスタイルの責務を明確化**

- 既存 style.css（2000行超）を分割・整理
- グローバルCSSは最小限のみ

### 4. **jQuery依存からの脱却**

- slick → React Swiper に置き換え
- DOM操作から React 的な状態管理へ移行

### 5. **Next.js固有の実務知識の習得**

- layout.tsx（共通レイアウト）
- metadata API（SEO）
- next/image で画像最適化
- SSG/SSRの切り替えと理解

---

## 使用技術

### Frontend

- **Next.js 14 (App Router)**
- **React 18**
- **SCSS Modules**
- **TypeScript**
- **Swiper.js (React版)**

### その他

- **Vercel デプロイ**
