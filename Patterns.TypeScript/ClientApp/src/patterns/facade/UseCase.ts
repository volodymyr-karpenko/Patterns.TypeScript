import { PatternUseCase } from "../PatternUseCase";
import { Facade } from "./Facade";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const facade: Facade = new Facade();
        facade.OperationAB();
        facade.OperationCD();
    }
}