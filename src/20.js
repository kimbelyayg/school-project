// 读取数据
const readline = require('readline');

// 创建一个流式处理的事件监听器
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 从标准输入读取一行文本
rl.on('line', (input) => {
  // 解析并打印每一行
  console.log(input);
}).on('close', () => {
  // 当程序结束时，关闭流式处理的事件监听器和标准输入输出
  rl.close();
});
