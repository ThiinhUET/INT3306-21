import  Event from "./event";
export default class Model {
  constructor() {
    this.board = Array(9).fill();
    this.curPlayer = 'X';
    this.finished = false;

    this.updateEvent = new Event();
    this.victoryEvent = new Event();
    this.drawEvent = new Event();
  }

  play(move) {
    if(this.finished) return false;
    this.board[move] = this.curPlayer;
    this.updateEvent.trigger({cellIndex: move, player: this.curPlayer});

    // 1. Kiểm tra thắng, hòa 2. nếu không đổi người chơi

    this.finished = this.victory() || this.draw();

    if(!this.finished) {
      this.curPlayer = this.curPlayer === 'X' ? 'O' : 'X';
    }
  }

  victory() {
    const winingCase = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    const victory = winingCase.some( c  => this.board[c[0]] && 
      this.board[c[0]] === this.board[c[1]] &&
      this.board[c[1]] === this.board[c[2]]
    )

    if(victory) {
      this.victoryEvent.trigger(this.curPlayer);
    }

    return victory;
  }

  draw() {
    const draw = this.board.every(i => i);
    if(draw){
      this.drawEvent.trigger();
    }
    return draw;
  }
}