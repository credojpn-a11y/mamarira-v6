const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, BorderStyle, WidthType, ShadingType, HeadingLevel,
        PageBreak } = require("docx");

const pink = "E8927C";
const brown = "4A3728";
const lightPink = "FDF2F0";
const lightGray = "F5F5F5";
const border = { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 100, bottom: 100, left: 150, right: 150 };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Yu Gothic UI", size: 22, color: brown } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Yu Gothic UI", color: pink },
        paragraph: { spacing: { before: 360, after: 240 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Yu Gothic UI", color: brown },
        paragraph: { spacing: { before: 280, after: 180 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Yu Gothic UI", color: brown },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1200, bottom: 1440, left: 1200 }
      }
    },
    children: [
      // ===== 表紙 =====
      new Paragraph({ spacing: { before: 3000 } }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "ママりら", size: 56, bold: true, font: "Yu Gothic UI", color: pink })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [new TextRun({ text: "サイト更新ガイド", size: 40, bold: true, color: brown })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "〜 はじめてでも安心 〜", size: 26, color: "888888" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 1200 },
        children: [new TextRun({ text: "真理子さん専用マニュアル", size: 24, color: "888888" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "2026年6月 作成", size: 22, color: "AAAAAA" })]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== このガイドについて =====
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("このガイドについて")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("このガイドは、ママりらのWebサイトを更新するための手順書です。「クロード」というAIアシスタントを使って、サイトの文章を変更したり、記事を追加したりできます。")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("難しい操作は一切ありません。やりたいことを日本語で伝えるだけで、クロードが代わりに作業してくれます。")]
      }),

      // ===== 大事なお約束 =====
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("大事なお約束（自動で守られます）")] }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("以下の3つのルールは、クロードに最初から設定してあります。真理子さんが意識しなくても、自動的に守られます。")]
      }),

      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [500, 3000, 6006],
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 500, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: pink, type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: lightPink, type: ShadingType.CLEAR },
                children: [new Paragraph({ children: [new TextRun({ text: "修正前にバックアップ", bold: true })] })] }),
              new TableCell({ borders, width: { size: 6006, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun("変更する前に、自動的にファイルのコピーが保存されます。")] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 500, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: pink, type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: lightPink, type: ShadingType.CLEAR },
                children: [new Paragraph({ children: [new TextRun({ text: "画像は触らない", bold: true })] })] }),
              new TableCell({ borders, width: { size: 6006, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun("写真や画像ファイルは変更されません。")] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 500, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: pink, type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: lightPink, type: ShadingType.CLEAR },
                children: [new Paragraph({ children: [new TextRun({ text: "いつでも元に戻せる", bold: true })] })] }),
              new TableCell({ borders, width: { size: 6006, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun("気に入らない場合は「元に戻して」と言うだけでOK。")] })] }),
            ]
          }),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== 基本的な使い方 =====
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("基本的な使い方")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Step 1：クロードを開く")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("パソコンで Claude（クロード）のデスクトップアプリを開きます。")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("左メニューから「LP作成」のプロジェクトを選んでください。")] }),
      new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: "※ プロジェクトの中にサイトの設定が保存されているので、毎回同じプロジェクトを使ってください。", color: "888888", size: 20 })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Step 2：やりたいことを伝える")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("メッセージ欄に、やりたいことを日本語で入力して送信します。")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("難しい言い方は不要です。普段話すように伝えればOKです。")] }),
      new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: "具体的な言い方の例は、次のページの「よく使うフレーズ集」を参考にしてください。", italics: true })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Step 3：確認して公開する")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("クロードが変更を完了すると、確認用のファイルが表示されます。")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("内容を確認して、OKならCloudflareにアップロードして公開します。")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "気に入らなければ「元に戻して」と伝えるだけで、変更前の状態に戻ります。", bold: true, color: pink })] }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== よく使うフレーズ集 =====
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("よく使うフレーズ集")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("以下のフレーズをそのままコピーして使えます。「」内の部分を変えるだけでOKです。")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("文章を変更したい時")] }),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [9506],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "ファーストビューのキャッチコピーを「〇〇〇」に変えてください", size: 22 })] }),
              ] })
          ] }),
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "お客様の声のセクションに、新しい口コミを追加してください", size: 22 })] }),
              ] })
          ] }),
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "FAQに「〇〇〇」という質問を追加してください", size: 22 })] }),
              ] })
          ] }),
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "対応エリアに「〇〇市」を追加してください", size: 22 })] }),
              ] })
          ] }),
        ]
      }),

      new Paragraph({ spacing: { before: 300 }, heading: HeadingLevel.HEADING_3, children: [new TextRun("元に戻したい時")] }),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [9506],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "さっきの変更、やっぱり元に戻してください", size: 22 })] }),
              ] })
          ] }),
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "今日の変更を全部取り消して、朝の状態に戻してください", size: 22 })] }),
              ] })
          ] }),
        ]
      }),

      new Paragraph({ spacing: { before: 300 }, heading: HeadingLevel.HEADING_3, children: [new TextRun("公開したい時")] }),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [9506],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "この内容でOKです。サイトに反映してください", size: 22 })] }),
              ] })
          ] }),
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 9506, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: lightGray, type: ShadingType.CLEAR },
              children: [
                new Paragraph({ children: [new TextRun({ text: "Cloudflareにアップロードしてください", size: 22 })] }),
              ] })
          ] }),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== サイトの構成 =====
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("サイトの構成（参考）")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("サイトは上から順に以下のセクションで構成されています。変更を依頼する時にセクション名を伝えると、スムーズに作業が進みます。")] }),

      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [600, 3200, 5706],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 600, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: pink, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "#", bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders, width: { size: 3200, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: pink, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "セクション名", bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders, width: { size: 5706, type: WidthType.DXA }, margins: cellMargins,
              shading: { fill: pink, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "内容", bold: true, color: "FFFFFF" })] })] }),
          ] }),
          ...[
            ["1", "ファーストビュー", "メインのキャッチコピーと写真"],
            ["2", "お悩み", "ターゲットの悩みに共感するセクション"],
            ["3", "できること", "3つのサービス紹介（荷造り・荷解き・整理整頓）"],
            ["4", "安心の理由", "女性専用・保育士資格など4つの安心ポイント"],
            ["5", "お客様の声", "利用者の感想・口コミ"],
            ["6", "こんな時に", "利用シーンの紹介"],
            ["7", "Before & After", "整理前後の比較"],
            ["8", "代表挨拶", "真理子さんからのメッセージ"],
            ["9", "ご利用の流れ", "LINE相談〜作業完了までの4ステップ"],
            ["10", "よくある質問", "FAQ"],
            ["11", "最終CTA", "LINE無料相談ボタン"],
          ].map(([num, name, desc]) =>
            new TableRow({ children: [
              new TableCell({ borders, width: { size: 600, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun(num)] })] }),
              new TableCell({ borders, width: { size: 3200, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: lightPink, type: ShadingType.CLEAR },
                children: [new Paragraph({ children: [new TextRun({ text: name, bold: true })] })] }),
              new TableCell({ borders, width: { size: 5706, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun(desc)] })] }),
            ] })
          ),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ===== 重要な情報 =====
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("重要な情報まとめ")] }),

      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [3000, 6506],
        rows: [
          ...[
            ["サイトURL", "https://mamarira-v6-32h.pages.dev/"],
            ["Cloudflareアカウント", "Credojpn@gmail.com"],
            ["GitHubアカウント", "credojpn-a11y"],
            ["GitHubリポジトリ", "https://github.com/credojpn-a11y/mamarira-v6"],
          ].map(([label, value]) =>
            new TableRow({ children: [
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                shading: { fill: lightPink, type: ShadingType.CLEAR },
                children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })] }),
              new TableCell({ borders, width: { size: 6506, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun(value)] })] }),
            ] })
          ),
        ]
      }),

      new Paragraph({ spacing: { before: 400, after: 200 }, children: [
        new TextRun({ text: "困った時は、クロードに「助けて」「分からない」と伝えれば、丁寧にサポートしてくれます。何回聞いても大丈夫です。", color: pink, bold: true })
      ] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/sessions/trusting-elegant-fermi/mnt/mamarira-v6/mamarira-v6/真理子さん向け_サイト更新ガイド.docx", buffer);
  console.log("DONE");
});
