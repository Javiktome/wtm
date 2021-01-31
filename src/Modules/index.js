import { SodexaData } from "./sodex-data";
import { FazerMenuEn } from "./fazer-data-en";
import { FazerLunchMenu } from "./fazer-data";

class InterfaceModules {
  getData(data) {
    return data;
  }
}

export class SodexoModule extends InterfaceModules {
  constructor() {
    super();
  }

  getData() {
    return super.getData(SodexaData);
  }
}

export class FazerModule extends InterfaceModules {
  constructor() {
    super();
  }

  getData(language) {
    if (language === "en") {
      return super.getData(FazerMenuEn);
    } else {
      return super.getData(FazerLunchMenu);
    }
  }
}
