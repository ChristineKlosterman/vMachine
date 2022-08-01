import { snackController } from "./Controllers/snackController.js";

class App {
  SnackController = new snackController();
}

window["app"] = new App();
