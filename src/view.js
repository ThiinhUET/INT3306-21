import './style.css';
import { Event } from './event';
export default class View {
  constructor () {
    this.playEvent = new Event();
  }
  render() {
    const board = document.createElement('div')
    board.className = 'board';

    this.cells = Array(9).fill().map((_,index) => {
      const cell = document.createElement('div');
      cell.className = 'cell';

      cell.addEventListener('click', () => {
        this.playEvent.trigger(index);
      });

      board.appendChild(cell);
    });

    document.body.appendChild(board)
  }
}