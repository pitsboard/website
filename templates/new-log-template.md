---
title: "【ここにタイトルを記述】"
publishDate: "2026-05-29" # YYYY-MM-DD 形式
author: "Kenji Sato"
summary: "【ここに記事の簡単な概要（1-2行）を記述】"
tags: ["Hardware", "Software"] # 任意のタグ
---

ここから記事の本文を開始します。H1からH5までのヘッダーや、通常のテキスト段落、リスト、太字などを自由に記述できます。

### 1. YouTube 動画の埋め込みテンプレート
以下のコードブロックをコピペし、`[VIDEO_ID]` の部分をYouTubeのビデオID（例: `dQw4w9WgXcQ`）に置き換えるだけで、美しいレスポンシブ動画が埋め込まれます。

<div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/[VIDEO_ID]" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
  ></iframe>
</div>

### 2. GIF / 画像と等幅キャプションのテンプレート
GIFや通常画像を配置する場合は、以下をコピーしてご利用ください。画像下部に極細の等幅キャプションが表示されます。

![画像代替テキスト](【画像のファイルパスまたはURL】)
<div class="img-caption">FIG.01 - 【ここに画像のキャプションを大文字等で記述すると映えます】</div>

### 3. コードブロック
通常のトリプルバッククォートによるコードブロックも、高コントラストなシンタックスハイライト（ダークカラー）で描画されます。

```javascript
const device = await navigator.hid.requestDevice({
  filters: [{ vendorId: 0x1209 }]
});
console.log("PitsBoard connected via WebHID!");
```
