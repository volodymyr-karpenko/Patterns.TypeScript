import { PatternUseCase } from "../PatternUseCase";
import { Adapter } from "./Adapter";
import { ITarget } from "./ITarget";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();
        const target: ITarget = new Adapter();
        target.Request();
    }
}