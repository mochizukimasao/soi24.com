const { spawn } = require('child_process');
const { exec } = require('child_process');

// サーバーを起動
const server = spawn('npx', ['http-server', '-p', '3000'], {
  stdio: 'inherit',
  shell: true
});

// サーバーが起動したら少し待ってからメッセージを表示
setTimeout(() => {
  console.log('\n✅ サーバーが起動しました！');
  console.log('📱 Cursorの内蔵ブラウザで以下のURLを開いてください:');
  console.log('   http://localhost:3000\n');
  console.log('💡 開き方: Cmd + Shift + P → "Browser Tab" → URLを入力\n');
}, 2000);

// プロセス終了時の処理
process.on('SIGINT', () => {
  server.kill();
  process.exit();
});


