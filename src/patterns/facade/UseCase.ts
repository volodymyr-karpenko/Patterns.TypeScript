import { PatternUseCase } from "../PatternUseCase";
import { Facade } from "./Facade";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const facade: Facade = new Facade();
    facade.operationAB();
    facade.operationCD();
  }
}
