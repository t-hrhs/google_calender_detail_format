# google_calender_detail_format
Googleカレンダーのイベント作成時の説明にデフォルトのメッセージをいれてくれるchrome extention。
https://chrome.google.com/webstore/detail/google-calendar-descripti/pbeidkeimclenobeiabdalhbkhhmmbkb
でchrome ウェブストアに公開中

# Dependency
node (動作確認している環境はv7.0.0)

# Setup
npm install -g yo bower gulp
npm install

# Usage
1. gulp watchを実行
2. chrome://extensions/ にアクセスする
3. デベロッパーモードをONにする
4. パッケージ化されていない拡張機能を読み込むを押し、app配下を指定する
5. あとは修正のたびにgulp watchがよしなにやってくれるはず
