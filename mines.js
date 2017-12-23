let Mines = function() {
  this.node = undefined;
  this.moves = [];
}

Mines.prototype = {
  checkForStart: function(number) {
    if(!this.node){
      return number < 11 && number > 0;
    }
    return false;
  },
  getValidOptions: function(num) {
    if (!this.node) {
      this.node = num;
      return [num];
    } else {
      let number = this.node;
      let validOption = [number - 1, number + 1, number + 10, number - 10];
      let allOption = this.allValidOtion();
      if(validOption.includes(num))this.node = num;
      return validOption.filter(function(move) {
        return allOption.includes(move);
      });
    }
  },
  allValidOtion: function() {
    let allOptions = new Array(100);
    let number = 1;
    return allOptions.fill(0).map(function(ele) {
      return number++;
    })
  },
  checkForAlreadyExist: function(validOption) {
    return validOption.filter((move) => {
      return !this.moves.includes(move)
    });
  },
  putMines: function(validOption) {
    let mines = [];
    let minesSpace = this.checkForAlreadyExist(validOption);
    if (minesSpace.length <= 1) {
      return [];
    }
    if (minesSpace.length == 2) {
      let mine = minesSpace[Math.floor(Math.random() * 1)]
      mines.push(mine);
    } else {
      mines.push(minesSpace[Math.floor(Math.random() * 3)]);
      mines.push(minesSpace[Math.floor(Math.random() * 3)]);
    }
    return mines
  },
  checkForWin:function(number){
    return this.node > 90;
  }
};
