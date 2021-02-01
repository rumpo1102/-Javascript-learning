// 変数リスト
let rectX = 0;
let rectY = 0;
const rectSize = 30;

// 描画エリアを定義する
const canvasElement = document.getElementById("canvasElement");
const canvasContents = canvasElement.getContext("2d");
canvasElement.width = 300;
canvasElement.height = 300;
canvasElement.style.border = "2px solid #555";

// ブロックをひとつ描画する関数
function drawRect(rectX, rectY) {
  canvasContents.fillStyle = "blue";
  canvasContents.fillRect(rectX, rectY, rectSize, rectSize);
}

// テトロミノを表現する配列
let tetro =[
  //列の添え字　左から0,1,2,3
  [0, 0, 0, 0], //行の添え字0
  [1, 1, 0, 0], //行の添え字1
  [0, 1, 1, 0], //行の添え字2
  [0, 0, 0, 0] //行の添え字3
  //一番左下のゼロは、tetro[3][3]ってことね。
]

//テトロミノを描画する関数
function drawTetro(tx, ty){
  for (y = 0; y < 4; y++){
      for (x = 0; x < 4; x++){
        if(tetro[y][x] == 1){
          drawRect(tx * rectSize + x * rectSize, ty * rectSize + y * rectSize)
        }
      }
  }
}

drawTetro(7, 0);

drawTetro(3, 5);

// // フィールド内をシロで初期化する→これじゃブロックの現状が判らない。配列でやろう。
// function initField() {
//   canvasContents.fillStyle = "white";
//   canvasContents.fillRect(0, 0, canvasElement.width, canvasElement.height);
// }

// // 配列版のフィールドリセット
// function initField(){
//   fieldRow = for(i=0; i<30; i++){
//
//   }
// }

// 最初のひとつのブロック
drawRect(rectX, rectY);

// キーボードで動かしてみる
document.onkeydown = function(e) {
  switch (e.keyCode) {

    case 37: //左
      if (rectX >= rectSize) {
        rectX -= rectSize;
      }
      break;

    case 38: //上
      if (rectY >= rectSize) {
        rectY -= rectSize;
      }
      break;

    case 39: //右
      if (rectX <= canvasElement.width - rectSize * 2) {
        rectX += rectSize;
      }
      break;

    case 40: //下
      if (rectY <= canvasElement.height - rectSize * 2) {
        rectY += rectSize;
      }
      break;
  }
  // initField();
  drawRect(rectX, rectY);
}

// // 繰り返してみる関数
// for(let j = 0; j < 20; j++){
//   for(let i = 0; i < 5; i++){
//     drawRect( rectX, rectY);
//     rectX += 10;
//     rectY += 10;
//   }
// rectX = rectX - 40;
// rectX += 10;
// rectY = 0;
// }


// 試しにコンソールにテキストを出してみた
console.log('test');
