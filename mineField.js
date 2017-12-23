const checkForStart =  function (mines,mine,cell,start) {
  if (!mines.checkForStart(cell) && !start) {
    let alert = document.getElementById('alert');
    alert.innerHTML = 'invalid move';
    return true;
  }else{
  let alert = document.getElementById('alert');
  alert.innerHTML = '';
  return false;
  }
};

const changesOnMine = function(mine,mines,cell){
  mine.style = 'background-color:red';
  let table = document.getElementById('table');
  if(count==1){
    table.onclick = null;
    document.getElementById('over').style.visibility = 'visible';
  }   
  count--;
  document.getElementById('count').innerText = 'count:' + count;
};

const changesOnrightMove = function(mine,mines,cell){
  mine.style = 'background-color:green';
  if (mines.checkForWin(cell)) {
    let alert = document.getElementById('alert');
    alert.innerHTML = 'YOU WIN';
  }
};

const invalidMove = function(){
  let alert = document.getElementById('alert');
  alert.innerHTML = 'invalid move';
};


let mines;
let start = false;
let count = 3;

const mineNumber = function(event) {
  let cell = +event.target.id;
  let mine = event.target;
  if(checkForStart(mines,mine,cell,start)){
    return;
  }; 
  start = true;
  let validOptions = mines.getValidOptions(cell);
  let mineBlock = mines.putMines(validOptions);
  if (validOptions.includes(cell) && validOptions) {
    if (mineBlock.includes(cell)) {
      changesOnMine(mine,mines,cell);
    } else {
      changesOnrightMove(mine,mines,cell);
    }
  } else {
    invalidMove();
  }
};

const resetGame = function() {
  location.reload();
};


const startGame = function(event) {
  mines = new Mines();
  let table = document.getElementById('table');
  table.onclick = mineNumber;
  let reset = document.getElementById('reset');
  reset.onclick = resetGame
};
window.onload = startGame
