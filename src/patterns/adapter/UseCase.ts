import { PatternUseCase } from "../PatternUseCase";
import { Adapter } from "./Adapter";
import { ITarget } from "./ITarget";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const target: ITarget = new Adapter();
    target.request();
  }
}
