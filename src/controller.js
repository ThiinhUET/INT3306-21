import View from "./view";
import Model  from "./model";

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();

    this.view.playEvent.addListener(cellIndex => this.model.play(cellIndex));
  }

  run() {
    this.view.render();
  }
}