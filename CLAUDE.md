# ママりら サイト管理ルール

## 絶対に守るルール（3つ）

1. **修正前にバックアップを必ず保存する**
   - `backup/` フォルダに `index_backup_YYYYMMDD_NN.html` の形式で保存
   - 例: `index_backup_20260604_01.html`

2. **画像は絶対にいじらない**
   - `img_v6/` フォルダ内のファイルを変更・削除・差し替えしない
   - index.html内の画像パス（src属性）やalt属性も変えない

3. **いつでも元に戻せるようにする**
   - 変更が気に入らない場合、backupから即座に復元する
   - 復元方法: `backup/` 内の最新ファイルを `index.html` にコピーする

## サイト構成

```
mamarira-v6/
├── index.html          ← メインのLP（編集するのはこれだけ）
├── img_v6/             ← 画像（触らない）
│   ├── hero.jpg
│   ├── worry.jpg
│   ├── before.jpg / after.jpg
│   ├── service_01〜03.jpg
│   ├── case_relief.jpg / case_consult.jpg
│   └── cta_hug.jpg
├── backup/             ← バックアップ保存先
├── column/             ← コラム記事（今後追加）
└── CLAUDE.md           ← このファイル
```

## index.html のセクション構造

| セクションID | 内容 | 行番号目安 |
|---|---|---|
| `#hero` | ファーストビュー（メインコピー） | 815行〜 |
| `#worry` | お悩み | 863行〜 |
| `#services` | できること（3サービス） | 885行〜 |
| `#trust` | 安心して頼める理由 | 954行〜 |
| `#voice` | お客様の声 | 993行〜 |
| `#cases` | こんな時に使われています | 1022行〜 |
| `#beforeafter` | Before & After | 1045行〜 |
| `#greeting` | 代表挨拶 | 1066行〜 |
| `#flow` | ご利用の流れ | 1090行〜 |
| `#faq` | よくあるご質問 | 1121行〜 |
| `#cta-final` | 最終CTA | 1156行〜 |

## 公開・デプロイ情報

- **公開URL（自動デプロイ）**: https://mamarira-v6-32h.pages.dev/
- **公開URL（手動）**: https://billowing-band-a89f.credojpn.workers.dev/
- **GitHub**: https://github.com/credojpn-a11y/mamarira-v6
- **Cloudflare**: Credojpn@gmail.com

### 更新の流れ
1. こちらで index.html を編集
2. GitHub の mamarira-v6 リポジトリにアップロード
3. 自動的に https://mamarira-v6-32h.pages.dev/ に反映

### 手動アップ（急ぎの場合）
1. Cloudflareダッシュボード → Workers & Pages → billowing-band-a89f
2. 「New deployment」→ フォルダをドラッグ＆ドロップ

## よくある変更パターン

### テキストを変更したい場合
Grepでキーワードを検索 → 該当箇所をEditで変更

### セクションを追加したい場合
挿入したい位置の `</section>` の後に新しいセクションを追加
既存のCSSクラス（eyebrow, section-title, container-narrow等）を使う

### コラム記事を追加したい場合
1. `column/` フォルダに新しいHTMLファイルを作成
2. LP（index.html）にコラムセクションのカードを追加

## デプロイ（サイト反映）の自動化

### 最優先: deploy.bat を使う
サイトフォルダ内の `deploy.bat` をダブルクリックするだけでGitHub経由の自動デプロイが完了する。
- 初回のみ Git のインストールが必要（https://git-scm.com/download/win）
- インストール時はすべてデフォルト設定でOK
- 初回実行時に自動でGitHubリポジトリと接続される

### 手順
1. こちらでファイルを編集（バックアップ → 編集 → 確認）
2. ユーザーに「deploy.bat をダブルクリックしてください」と伝える
3. コミットメッセージを入力 → 自動でGitHubにアップ → サイトに反映

### deploy.bat が使えない場合のフォールバック
インクロームに以下のテンプレートで依頼する：

```
GitHubの index.html を編集してください。
リポジトリ: https://github.com/credojpn-a11y/mamarira-v6
[変更箇所の具体的な指示をここに書く]
コミットメッセージ: 「[変更内容]」
```
