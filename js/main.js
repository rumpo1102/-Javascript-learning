// 変数リスト
var canvasElement = document.getElementById("canvasElement");
var canvasContents = canvasElement.getContext("2d");

// 試しに描画してみる
drawRect();

function drawRect(){
  canvasContents.fillStyle = "blue";
  canvasContents.fillRect(0,0,50,50);
}

// 試しにコンソールにテキストを出してみた
console.log('test');
