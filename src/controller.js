import View from "./view";
import Model  from "./model";

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();

    this.view.playEvent.addListener(cellIndex => this.model.play(cellIndex));
    
    this.model.updateEvent.addListener(data => this.view.updateCell(data));
    this.model.victoryEvent.addListener(winnder =>  this.view.victory(winnder));
    this.model.drawEvent.addListener(() => this.view.draw());
  }

  run() {
    this.view.render();
  }
}