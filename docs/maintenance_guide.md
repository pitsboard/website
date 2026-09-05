# PitsBoard Webサイト 更新・修正運用ガイド

このガイドでは、リニューアルしたPitsBoardのWebサイトにおいて、日々の「記事の追加」「メディアの埋め込み」「LPのテキスト修正」「スタイルのカスタマイズ」を行う手順をわかりやすくまとめています。

---

## 📂 ディレクトリ構成の全体像

更新作業に関わる主要なファイルとフォルダの配置は以下の通りです：

```text
pitsboard_website/
├── docs/
│   └── maintenance_guide.md      <-- 本ガイド
├── src/
│   ├── content/
│   │   ├── research/             <-- ブログ（研究ログ）のMarkdown/MDXファイルを格納
│   │   │   ├── log-01.mdx
│   │   │   └── log-03.mdx
│   │   └── sections/             <-- LP（ランディングページ）の各セクションのテキストを格納
│   │       ├── concept.md
│   │       └── hardware.md
│   ├── styles/
│   │   └── global.css            <-- デザインシステム、共通スタイル（ダークテーマ）
│   └── pages/
│       ├── index.astro           <-- メインLPの構成定義ファイル
│       └── research/
│           └── [...slug].astro   <-- ブログ詳細ページの表示定義ファイル
├── templates/
│   └── new-log-template.md       <-- 記事追加時のコピペ用テンプレート
└── package.json
```

---

## ✍️ 1. ブログ（研究ログ）の新規追加手順

新しい記事を追加するのは非常に簡単です。以下のステップで行います。

### ステップ1: テンプレートをコピーする
プロジェクトのルートにある `templates/new-log-template.md` を開き、内容をすべてコピーします。

### ステップ2: 新しいファイルを新規作成する
`src/content/research/` フォルダの中に、新しいファイル（例: `log-04.mdx` または `log-04.md`）を作成し、コピーした内容を貼り付けます。
> [!NOTE]
> `.mdx` 拡張子にすると、通常のMarkdown記述の中にAstroコンポーネント（例: `<IndicatorLight />`）などを直接配置することができます。特にコンポーネントを使わない場合は `.md` でも構いません。

### ステップ3: フロントマター（ヘッダー情報）を書き換える
ファイルの先頭にある `---` で囲まれたメタ情報を書き換えます。

```yaml
---
title: "WebHIDを介したブラウザ連携プロトタイプ"  # 記事のタイトル
publishDate: "2026-05-30"                      # 投稿日 (YYYY-MM-DD)
author: "Kenji Sato"                           # 執筆者名（自動で署名欄に反映）
summary: "Webブラウザ上で動作する設定エディタの通信機構の設計。" # 一覧に表示される概要
tags: ["Software", "WebHID", "API"]            # タグ（複数設定可能）
---
```
> [!IMPORTANT]
> - `publishDate` などの値は必ず引用符（`""`）で囲んでください。
> - `author:` や `publishDate:` のコロン（`:`）の後ろには、必ず**半角スペース**を入れてください（YAMLの構文エラー防止のため）。

---

## 🎥 2. 記事内への動画・画像の埋め込み方法

欧米風のミニマルな美しさを維持するために、あらかじめ専用のCSSスタイルが定義されています。

### 1) YouTube 動画のレスポンシブ埋め込み
YouTubeの動画を埋め込む際は、以下のHTMLラッパーコードを使用します。

```html
<div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/【動画のID】" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
  ></iframe>
</div>
```
- `【動画のID】` の部分（例: `dQw4w9WgXcQ`）をご自身のYouTube動画IDに置き換えてください。
- これにより、スマホでもPCでもアスペクト比 16:9 を保ったまま綺麗に全幅フィットします。

### 2) GIFアニメーション / 画像 ＋ 等幅キャプション
動作デモ用のGIFや画像を挿入する場合は、通常のMarkdownによる画像指定の直後に `<div class="img-caption">` を配置します。

```markdown
![ダイヤル回転の様子](/images/dial-rotation-demo.gif)
<div class="img-caption">FIG.01 - OPTICAL ROTARY ENCODER SWEEP AND VISUAL FEEDBACK DETAILED PROBE</div>
```
- 画像のすぐ下に置いた文字列が、極小のモノクロ等幅フォント（ラボノート風）でスタイリッシュに表示されます。
- キャプションはすべて大文字（アルファベット）で記述すると、よりインダストリアルなデザインが際立ちます。

---

## 📝 3. LP（ランディングページ）のテキスト修正方法

メインLP（トップページ）の各セクションの文章は、ソースコードを直接触らずに、Markdownファイルを修正するだけで簡単に書き換えることができます。

- **`src/content/sections/` 内の各ファイルを修正します：**
  - `concept.md`: コンセプト（THE IDEA）セクションの本文
  - `hardware.md`: ハードウェア（THE CHASSIS）セクションの本文
  - `software.md`: ソフトウェア（THE INTERFACE）セクションの本文
  - `devkit.md`: 開発キット（BUILD THE FUTURE）セクションの本文
  - `interaction.md`: HCI実験（HCI EXPERIMENTS）セクションの本文

ファイルを編集して保存するだけで、トップページ側の該当セクションの内容が即座に反映されます。

---

## 🎨 4. デザイン・色のカスタマイズ方法

Webサイト全体のカラーパレットやテーマ設定は、1つのCSSファイル内の「CSS変数」で一元管理されています。

- **ファイルパス**: `src/styles/global.css`
- **編集箇所**: 最上部にある `:root` 定義

```css
:root {
  --bg-primary: #0E0E10;   /* サイト全体の背景色（漆黒） */
  --bg-sidebar: #131316;   /* ブログ詳細画面の左サイドバー背景色 */
  --bg-card: #16161A;      /* カードや各種コンポーネントの背景パネル色 */
  
  --text-primary: #FFFFFF; /* 最も明るいメインテキスト色（純白） */
  --text-secondary: #8E8E93;/* サブテキストや本文のテキスト色（グレー） */
  --text-muted: #55555A;   /* 極薄のキャプションや非活性用テキスト色 */
  
  --accent-red: #FF3B30;   /* アクセントカラー（Nothing/TE風のレッド） */
  --border-color: #222226; /* 各種ボーダーやグリッドの境界線の色 */
  
  --grid-size: 24px;       /* 背景グリッドパターンのサイズ */
}
```

色味を微調整したい場合（例: 赤を少し朱色にしたい、背景をもっと漆黒にしたい等）は、この数値を変更するだけでサイト全体のデザインが一瞬で切り替わります。

---

## 💻 5. 開発および検証用コマンド

開発中やリリース前の検証に使用する主要コマンドです。プロジェクトルートディレクトリで実行します。

### 1) ローカル開発サーバーの起動
ローカルで表示を確認しながら開発を行う場合は以下を実行します。
```bash
npm run dev
```
画面に表示される `http://localhost:4321/`（すでにポートが使われている場合は `http://localhost:4322/` など）にブラウザでアクセスします。ファイルを保存すると自動でブラウザがリロードされます。

### 2) 生産用（本番用）スタティックビルド
本番サーバーへデプロイする際、またはビルドにエラーがないか検証する際は以下を実行します。
```bash
npm run build
```
エラーなく処理が終了すれば、`dist/` フォルダの中に完全な静的HTMLファイル群が書き出されます。

### 3) 本番ビルドのローカルプレビュー
ビルドされた本番用のHTMLファイルがローカルでどう動くかを検証する場合は以下を実行します。
```bash
npm run preview
```
