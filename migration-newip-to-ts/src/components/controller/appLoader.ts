import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://nodenews.herokuapp.com/", {
      apiKey: "d88fc9dd1a1f41adaac7a57e7824bee2", 
    });
  }
}

export default AppLoader;
