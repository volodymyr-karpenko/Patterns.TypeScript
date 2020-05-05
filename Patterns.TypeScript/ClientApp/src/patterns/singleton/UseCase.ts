import { PatternUseCase } from "../PatternUseCase";
import { Singleton } from "./Singleton";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const instance1: Singleton = Singleton.Instance;
        const instance2: Singleton = Singleton.Instance;

        PatternUseCase.Output += instance1 === instance2 ?
            "Same unique instance: " + instance1.constructor.name + " === " + instance2.constructor.name : false.toString();
    }
}